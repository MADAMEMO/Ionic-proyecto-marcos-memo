 angular.module('starter')

.controller('LoginCtrl', function($scope, $http, $filter, ConexionServ, AuthServ, $state, $ionicPopup, $timeout, AuthServ){

			console.log('hola');

		$scope.usu = { username: '', password: '', tipo: '' };  																															

	$scope.showAlert = function() {
		   var alertPopup = $ionicPopup.alert({
		     title: 'Datos Invalidos',
		     template: 'Usuario o Contraseña mal ingresados'
		   });

		   alertPopup.then(function(res) {
		     console.log('Thank you for not eating my delicious ice cream cone');
		   });
		 };

	$scope.entrar = function(usu){
		
		AuthServ.loguear(usu).then(function(){
			$state.go('tab.dash');
		}, function(err){
		
			console.log(usu, err);

		});
	};

  	ConexionServ.createTables();
  	    $scope.insertar_datos_iniciales = function() {

    	consulta = "SELECT * from users ";
   		ConexionServ.query(consulta, []).then(function(result) {
			if (result.length == 0) {




		consulta = "INSERT INTO users(nombres, apellidos, usuario, password, tipo, sexo) VALUES(?,?,?,?,?,?) ";
				ConexionServ.query(consulta, ['Angel Guillermo', 'Peñarredonda Silva', 'Angelghack',  '123', 'Admin', 'M']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

		

			}

        }, function(tx) {
          console.log("", tx);
		});

	};


	$scope.insertar_datos_iniciales();



});