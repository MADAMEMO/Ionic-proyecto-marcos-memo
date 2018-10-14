var app = angular.module('starter')

app.controller('taxistasmodificarCtrl', function($scope, ConexionServ, $stateParams, $state, $ionicPopup) {
  
  $scope.back = function() {

 $state.go('tab.taxistas')


  };

  consulta = 'SELECT *, rowid FROM taxistas WHERE rowid=? '
  ConexionServ.query(consulta, [$stateParams.taxistaId]).then(function(result){
    result[0].fecha_nac = new Date(result[0].fecha_nac);
    $scope.taxista_Editar = result[0];

  }, function(tx){
    console.log('Error trayendo taxista', tx);
  });
   
  console.log( $scope.taxista_Editar)
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Taxista Modificado',
     template: 'Este taxista ha sido modificado'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };


  $scope.GUARDARTAXISTA = function(taxista_Editar){
        if (taxista_Editar.password != taxista_Editar.password2 && taxista_Editar.password==undefined) {
      alert('Rectifique contraseña');
      return;
    }


    consulta = 'UPDATE taxistas SET  nombres=?, apellidos=?, sexo=?, documento=?, celular=?, fecha_nac=?, usuario=?, password=? where rowid=? '
    ConexionServ.query(consulta, [taxista_Editar.nombres, taxista_Editar.apellidos, taxista_Editar.sexo, taxista_Editar.documento, taxista_Editar.celular, taxista_Editar.fecha_nac, taxista_Editar.usuario, taxista_Editar.password, taxista_Editar.rowid]).then(function(result){
      console.log('se cargo el taxista', result);
          $scope.showAlert();
          $state.go('tab.taxistas');
           
         
    }, function(tx){
      console.log('error', tx);
    });
    $scope.ver = false;
  } 

}); 
