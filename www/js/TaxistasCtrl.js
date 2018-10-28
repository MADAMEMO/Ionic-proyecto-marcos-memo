var app = angular.module('starter');

app.controller('TaxistasCtrl', function($scope, $ionicSideMenuDelegate,  $http, $filter, ConexionServ, $ionicPopup){

ConexionServ.createTables();
$scope.verbuscar = false;
		$scope.verboton = true;

  $scope.mostrarboton = function(taxi){
   
   $scope.verbuscar = !$scope.verbuscar; 
	   $scope.verboton = !$scope.verboton; 
  
  }
	$scope.doRefresh = function() {
	    $scope.traer_datos();
	    $scope.$broadcast('scroll.refreshComplete');
	 };
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
 $scope.eliminar = function(taxista) {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Eliminar',
     template: '¿Esta seguro de eliminar este taxista?'
   });

   confirmPopup.then(function(res) {
     if(res) {
              if (taxista.id == null) {
        consulta = 'DELETE FROM taxistas Where rowid=?'
          ConexionServ.query(consulta, [taxista.rowid]).then(function(result){
            console.log('se elimino el taxista en la compu', result);
              $scope.traer_datos()
      
          }, function(tx){
            console.log('error', tx);
          });
        } else {
            consulta = 'UPDATE taxistas SET eliminado ="1"  Where rowid=?'
          ConexionServ.query(consulta, [taxista.rowid]).then(function(result){
            console.log('se elimino el taxista en la nube', result);
              $scope.traer_datos()
              
          }, function(tx){
            console.log('error', tx);
          });
        } 
     } else {
       return;
     }
   });
 };

	$scope.CREARTAXISTA = function(taxista_nuevo){
		if (taxista_nuevo.nombres == undefined) {
			alert('Debe poner nombres');
			return;
		}

		if (taxista_nuevo.apellidos == undefined) {
			alert('Debe poner apellidos');
			return;
		}
		if (taxista_nuevo.sexo == undefined) {
			alert('Debe poner sexo');
			return;
		}
		if (taxista_nuevo.documento == undefined) {
			alert('Debe poner documento');
			return;
		}
		if (taxista_nuevo.usuario == undefined) {
			alert('Debe poner usuario');
			return;
		}
		if (taxista_nuevo.password == undefined) {
			alert('Debe poner password');
			return;
		}

		if (taxista_nuevo.password.length < 4) {
			alert('Contraseña con mayor caracteres');
			return;
		}

			if (taxista_nuevo.password == undefined) {
			alert('Debe poner contraseña');
			return;
		}

		console.log(taxista_nuevo);
		if (taxista_nuevo.password != taxista_nuevo.password2) {
			alert('iguaesl contraseña');
			return;
		}


		fecha_nac = '' + taxista_nuevo.fecha_nac.getFullYear() + '-' + (taxista_nuevo.fecha_nac.getMonth() + 1) + '-' + taxista_nuevo.fecha_nac.getDate();	

		consulta = 'INSERT INTO taxistas (nombres, apellidos, sexo, documento, celular, fecha_nac, usuario, password) VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
		ConexionServ.query(consulta, [taxista_nuevo.nombres, taxista_nuevo.apellidos, taxista_nuevo.sexo, taxista_nuevo.documento, taxista_nuevo.celular, fecha_nac, taxista_nuevo.usuario, taxista_nuevo.password]).then(function(result){
			console.log('se cargo el taxista', result);
$scope.traer_datos()
		}, function(tx){
			console.log('error', tx);
		});
	$scope.ver2 = false;

	}
  $scope.mostrartabla = function(taxista){
   
   $scope.ver2 = !$scope.ver2; 
 
  }

 $scope.traer_datos = function(){
	consulta = 'SELECT id, nombres, apellidos, sexo, documento, celular, fecha_nac, usuario, password, rowid from taxistas  WHERE eliminado = "0"'
		ConexionServ.query(consulta, []).then(function(result){
			$scope.taxistas = result;
			for (var i = 0; i < $scope.taxistas.length; i++) {
				$scope.taxistas[i].fecha_nac = new Date($scope.taxistas[i].fecha_nac);
				
			}
			console.log('se subio el taxista', result);

		}, function(tx){
			console.log('error', tx);
 
		});
	}
$scope.traer_datos()





});