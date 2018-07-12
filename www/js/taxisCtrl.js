var app = angular.module('starter');

app.controller('taxisCtrl', function($scope, $http, $filter, ConexionServ, $ionicPopup){


 $scope.eliminar = function(rowid) {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Eliminar',
     template: '¿Esta seguro de eliminar este usuario?'
   });

   confirmPopup.then(function(res) {
     if(res) {
        consulta = 'DELETE FROM taxis Where rowid=?'
        ConexionServ.query(consulta, [rowid]).then(function(result){
          console.log('se elimino el usuario', result);
           $scope.traer_datos();
       
        }, function(tx){
          console.log('error', tx);
        });
     } else {
       return;
     }
   });
 };

	$scope.CREARTAXI = function(taxi_nuevo){
		console.log(taxi_nuevo);

		if (taxi_nuevo.modelos == undefined) {
			alert('Debe poner modelos');
			return;
		}

		if (taxi_nuevo.placas == undefined) {
			alert('Debe poner placas');
			return;
		}
	
		if (taxi_nuevo.Soat == undefined) {
			alert('Debe poner Soat');
			return;
		}
		if (taxi_nuevo.Seguro == undefined) {
			alert('Debe poner Seguro');
			return;
		}
	

		consulta = 'INSERT INTO taxis (modelo, numero, placa, taxista_id, propietario, Soat, Seguro) VALUES(?, ?, ?, ?, ?, ?, ?)'
		ConexionServ.query(consulta, [taxi_nuevo.modelos, taxi_nuevo.numero, taxi_nuevo.placas, taxi_nuevo.taxista_id, taxi_nuevo.propietario	,  taxi_nuevo.Soat, taxi_nuevo.Seguro]).then(function(result){
			console.log('se cargo el taxi', result);
			$scope.traer_datos()
		}, function(tx){
			console.log('error', tx);
		});
		$scope.taxi_nuevo = {}

		$scope.ver2 = false;
	}
  $scope.mostrartabla = function(taxi){
   
   $scope.ver2 = !$scope.ver2; 
 
  }

 $scope.traer_datos = function(){ 

	consulta = 'SELECT *, rowid from taxis'
		ConexionServ.query(consulta, []).then(function(result){
			$scope.taxis = result;
			console.log('se subio el taxi', result);

		}, function(tx){
			console.log('error', tx);

		});

	}

	$scope.traer_datos()

	consulta = 'SELECT *, rowid from taxistas'
		ConexionServ.query(consulta, []).then(function(result){
			$scope.taxistas = result;
			console.log('se trajo el taxista', result);

		}, function(tx){
			console.log('error', tx);

		});


    
	$scope.guardartaxi = function(taxi_Editar){

		
		consulta = 'UPDATE taxis SET modelo=?, numero=?, placa=?, taxista_id=?, propietario=?, Soat=?, Seguro=? where rowid=? '
		ConexionServ.query(consulta, [taxi_Editar.modelos, taxi_Editar.numero, taxi_Editar.placas,  taxi_Editar.taxista_id, taxi_Editar.propietario, taxi_Editar.Soat, taxi_Editar.Seguro, taxi_Editar.rowid]).then(function(result){
			console.log('se cargo el taxi', result);

		}, function(tx){
			console.log('error', tx);
		});
			$scope.ver = false;
	}	

});