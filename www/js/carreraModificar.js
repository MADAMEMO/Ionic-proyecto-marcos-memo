var app = angular.module('starter')

app.controller('carrerasmodificarCtrl', function($scope, ConexionServ, $stateParams, $state, $ionicPopup) {
  

  consulta = 'SELECT *, rowid FROM carreras WHERE rowid=? '
  ConexionServ.query(consulta, [$stateParams.carreraId]).then(function(result){
    $scope.carrera_Editar = result[0];

  }, function(tx){
    console.log('Error trayendo carrera', tx);
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


  $scope.GUARDARCARRERA = function(carrera_Editar){
 
    fecha_inicio = '' + carrera_Editar.fecha_ini.getFullYear() + '-' + (carrera_Editar.fecha_ini.getMonth() + 1 )    + '-' + carrera_Editar.fecha_ini.getDate();
    fecha_fin = '' + carrera_Editar.fecha_fin.getFullYear() + '-' +  (  carrera_Editar.fecha_ini.getMonth()  +1 ) + '-' + carrera_Editar.fecha_ini.getDate();
  
    hora_inicio = '' + carrera_Editar.hora_ini.getHours() + ':' +    carrera_Editar.hora_ini.getMinutes();   //+ (carrera_nuevo.hora_ini.getHours() >= 12 ? "PM" : "AM");
    hora_final = '' + carrera_Editar.hora_fin.getHours() + ':' +    carrera_Editar.hora_fin.getMinutes();   //+ (carrera_nuevo.hora_fin.getHours() >= 12 ? "PM" : "AM");
  
    fechayhora_inicio   = fecha_inicio  + ' ' + hora_inicio;
    fechayhora_fin    = fecha_fin   + ' ' + hora_final;

    consulta = 'UPDATE carreras SET  taxi_id=?, taxista_id=?, zona=?, fecha_ini=?, lugar_inicio=?, lugar_fin=?, fecha_fin=?, estado=? where rowid=? '
    ConexionServ.query(consulta, [carrera_Editar.taxi.rowid, carrera_Editar.taxista.rowid, carrera_Editar.zona, fechayhora_inicio, carrera_Editar.lugar_inicio, carrera_Editar.lugar_fin, fechayhora_fin, carrera_Editar.estado, carrera_Editar.rowid]).then(function(result){
      console.log('se cargo la carrera', result);

      $scope.showAlert();
                 
     }), function(tx){
      console.log('error', tx);
    };
  } 

}); 
