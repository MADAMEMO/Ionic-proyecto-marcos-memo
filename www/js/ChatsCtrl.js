angular.module('starter')

.controller('ChatsCtrl', function($scope, Chats, $ionicSideMenuDelegate, ConexionServ, $ionicLoading, $ionicPopup) {
  $scope.doRefresh = function() {
      $scope.traer_datos();
      $scope.$broadcast('scroll.refreshComplete');
   };
$scope.verbuscar = false;
    $scope.verboton = true;

  $scope.mostrarboton = function(taxi){
   
   $scope.verbuscar = !$scope.verbuscar; 
     $scope.verboton = !$scope.verboton; 
  
  }
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
 $scope.eliminar = function(usuario) {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Eliminar',
     template: '¿Esta seguro de eliminar este usuario?'
   });

   confirmPopup.then(function(res) {
     if(res) {
              if (usuario.id == null) {
        consulta = 'DELETE FROM users Where rowid=?'
          ConexionServ.query(consulta, [usuario.rowid]).then(function(result){
            console.log('se elimino el usuario', result);
              $scope.traer_datos()
      
          }, function(tx){
            console.log('error', tx);
          });
        } else {
            consulta = 'UPDATE users SET eliminado ="1"  Where rowid=?'
          ConexionServ.query(consulta, [usuario.rowid]).then(function(result){
            console.log('se elimino el usuario en', result);
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


  $scope.CREARUSUARIO = function(usuario_nuevo){
    if (usuario_nuevo.nombres == undefined) {
      alert('Debe poner nombres');
      return;
    }

    if (usuario_nuevo.apellidos == undefined) {
      alert('Debe poner apellidos');
      return;
    }
    if (usuario_nuevo.sexo == undefined) {
      alert('Debe poner sexo');
      return;
    }
    if (usuario_nuevo.documento == undefined) {
      alert('Debe poner documento');
      return;
    }
    if (usuario_nuevo.usuario == undefined) {
      alert('Debe poner usuario');
      return;
    }
      if (usuario_nuevo.password.length < 4) {
      alert('Contraseña con mayor caracteres');
      return;
    }

      if (usuario_nuevo.password == undefined) {
      alert('Debe poner contraseña');
      return;
    }

    console.log(usuario_nuevo);
    if (usuario_nuevo.password != usuario_nuevo.password2) {
      alert('iguaesl contraseña');
      return;
    }

   
        fecha_nac = '' + usuario_nuevo.fecha_nac.getFullYear() + '-' + (usuario_nuevo.fecha_nac.getMonth() + 1) + '-' + usuario_nuevo.fecha_nac.getDate();  

    consulta = 'INSERT INTO users (nombres, apellidos, sexo, tipo, documento, celular, fecha_nac, usuario, password) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)'
    ConexionServ.query(consulta, [usuario_nuevo.nombres, usuario_nuevo.apellidos, usuario_nuevo.sexo, usuario_nuevo.tipo, usuario_nuevo.documento, usuario_nuevo.celular, fecha_nac, usuario_nuevo.usuario, usuario_nuevo.password]).then(function(result){
      console.log('se cargo el usuario', result);

      $ionicLoading.show({ template: 'Usuario guardado', noBackdrop: true, duration: 2000 }); 
    $scope.traer_datos();
    }, function(tx){
      console.log('error', tx);

    });
    $scope.ver2 = false;
  }
  $scope.mostrartabla = function(usuario){
   
   $scope.ver2 = !$scope.ver2; 
 
  }


  $scope.traer_datos = function(){
    consulta = 'SELECT *, rowid from users WHERE eliminado = "0" and rowid != "1"'
  ConexionServ.query(consulta, []).then(function(result){
    $scope.usuarios = result;
    for (var i = 0; i < $scope.usuarios.length; i++) {
        $scope.usuarios[i].fecha_nac = new Date($scope.usuarios[i].fecha_nac);
        
      }
    console.log('se subio el usuario', result);

  }, function(tx){
    console.log('error', tx);
  })
}
$scope.traer_datos()




})
