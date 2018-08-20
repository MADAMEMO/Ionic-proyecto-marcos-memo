 angular.module('starter')

.controller('LoginCtrl', function($scope, $http, $filter, ConexionServ, AuthServ, $state, $ionicPopup, $timeout){

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


});