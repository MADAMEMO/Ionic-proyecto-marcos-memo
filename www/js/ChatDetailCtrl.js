var app = angular.module('starter')

app.controller('ChatDetailCtrl', function($scope, ConexionServ, $stateParams, $state, $ionicPopup) {
  

  consulta = 'SELECT *, rowid FROM users WHERE rowid=? '
  ConexionServ.query(consulta, [$stateParams.chatId]).then(function(result){
    result[0].fecha_nac = new Date(result[0].fecha_nac);
    $scope.usuario_Editar = result[0];

  }, function(tx){
    console.log('Error trayendo usuario', tx);
  });
   
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Usuario Modificado',
     template: 'Este usuario ha sido modificado'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };


  $scope.GUARDARUSUARIO = function(usuario_Editar){
        if (usuario_Editar.password != usuario_Editar.password2 && usuario_Editar.password==undefined) {
      alert('Rectifique contraseña');
      return;
    }


    consulta = 'UPDATE users SET  nombres=?, apellidos=?, sexo=?, tipo=?, documento=?, celular=?, fecha_nac=?, usuario=?, password=?, modificado=? where rowid=? '
    ConexionServ.query(consulta, [usuario_Editar.nombres, usuario_Editar.apellidos, usuario_Editar.sexo, usuario_Editar.tipo, usuario_Editar.documento, usuario_Editar.celular, usuario_Editar.fecha_nac, usuario_Editar.usuario, usuario_Editar.password, usuario_Editar.rowid, modificado = 0]).then(function(result){
      console.log('se cargo el usuario', result);
          $scope.showAlert();
          $state.go('tab.Usuarios');
           
         
    }, function(tx){
      console.log('error', tx);
    });
    $scope.ver = false;
  } 

}); 
