var app = angular.module('starter')

app.controller('taximodificarCtrl', function($scope, ConexionServ, $stateParams, $state, $ionicPopup) {
  
  $scope.back = function() {


  $state.go('tab.taxis');

  };
  $scope.dato = {};

  consulta = 'SELECT t.*, t.rowid, c.nombres, c.apellidos from taxis t INNER JOIN taxistas c ON t.taxista_id=c.rowid WHERE t.rowid=? '
  ConexionServ.query(consulta, [$stateParams.taxiId]).then(function(result){
   
    $scope.taxi_Editar = result[0];

    $scope.dato.seleccionado = $scope.taxi_Editar.taxista_id;
    console.log( $scope.taxi_Editar)

  }, function(tx){
    console.log('Error trayendo taxista', tx);
  });
   


  consulta = 'SELECT *, rowid FROM taxistas  '
  ConexionServ.query(consulta, []).then(function(result){
   
    $scope.conductores = result;

  }, function(tx){
    console.log('Error trayendo taxista', tx);
  });


   
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Taxista Modificado',
     template: 'Este taxista ha sido modificado'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };



  $scope.GUARDARTAXI = function(taxi_Editar){
  

   consulta = 'UPDATE taxis SET modelo=?, numero=?, placa=?, taxista_id=?, propietario=?, Soat=?, Seguro=? where rowid=? '
    ConexionServ.query(consulta, [taxi_Editar.modelo, taxi_Editar.numero, taxi_Editar.placa,  taxi_Editar.taxista_id, taxi_Editar.propietario, taxi_Editar.Soat, taxi_Editar.Seguro, taxi_Editar.rowid]).then(function(result){
      console.log('se cargo el taxi', result);

          $scope.showAlert();
          $state.go('tab.taxis');
           
         
    }, function(tx){
      console.log('error', tx);
    });
    $scope.ver = false;
  } 

}); 
