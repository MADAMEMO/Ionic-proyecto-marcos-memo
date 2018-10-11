var app = angular.module('starter')

app.controller('carrerasmodificarCtrl', function($scope, ConexionServ, $stateParams, $state, $ionicPopup, ionicTimePicker, $state) {
  
    consulta = 'SELECT *, rowid FROM taxistas';
    ConexionServ.query(consulta, []).then(function(result){
      $scope.taxistas = result;
    }, function(tx){
      console.log('error', tx);
    });


    consulta = 'SELECT *, rowid  FROM taxis';
    ConexionServ.query(consulta, []).then(function(result){
      $scope.taxis = result;
    }, function(tx){
      console.log('error', tx);
    });
    
  $scope.carrera_Editar = {};

  consulta = 'SELECT *, rowid FROM carreras WHERE rowid=? '
  ConexionServ.query(consulta, [$stateParams.carreraId]).then(function(result){
     result[0].fecha_ini = new Date(result[0].fecha_ini);
     result[0].fecha_fin = new Date(result[0].fecha_fin);
     console.log(result)

     result[0].hora_ini = '' + result[0].fecha_ini.getHours() + ':' + result[0].fecha_ini.getMinutes();
     result[0].hora_fin = '' + result[0].fecha_fin.getHours() + ':' + result[0].fecha_fin.getMinutes();
    

      consulta = 'SELECT *, rowid  FROM taxis WHERE rowid=?';
      ConexionServ.query(consulta, [ result[0].taxi_id ]).then(function(taxi){
        if (taxi.length > 0) {
          result[0].taxi_temp = taxi[0].numero;
        }

        

        $scope.carrera_Editar = result[0];
      }, function(tx){
        console.log('error', tx);
      });

    
      consulta = 'SELECT *, rowid  FROM users WHERE rowid=?';
      ConexionServ.query(consulta, [ result[0].registrada_por ]).then(function(users){

        if (users.length > 0) {
          result[0].usuario_temp = users[0].nombres;
        }

        $scope.carrera_Editar = result[0];
      }, function(tx){
        console.log('error', tx);
      });

        





  }, function(tx){
    console.log('Error trayendo carrera', tx);
  });

    
  $scope.mostarhoraini = function (){
    var hora_iniciaal = $scope.carrera_Editar.fecha_ini;

    var Horainicial = {
      callback: function (val) {      //Mandatory
        if (typeof (val) === 'undefined') {
          console.log('Hora no colocada');
        } else {
          selectedTime = new Date(val * 1000);

          console.log(selectedTime)

          $scope.hora_ini_arreglada   = '' + selectedTime.getUTCHours() + ':' + selectedTime.getUTCMinutes();
          $scope.carrera_Editar.hora_ini       = $scope.hora_ini_arreglada;

          console.log($scope.hora_ini)
        }
      },
      inputTime: (((hora_iniciaal).getHours() * 60 * 60) + ((hora_iniciaal).getMinutes() * 60)),   //Optional
      format: 12,         //Optional
      step: 1,           //Optional
      setLabel: 'Guardar'    //Optional
    };

    ionicTimePicker.openTimePicker(Horainicial); 
  };



   $scope.mostarhorafinal = function (){
    var hora_finnal = $scope.carrera_Editar.fecha_fin;
     var Horafinal = {
    
    callback: function (val2) {      //Mandatory
      if (typeof (val2) === 'undefined') {
        console.log('Hora no colocada');
      } else {
        selectedTime2 = new Date(val2 * 1000);

        $scope.hora_fin_arreglada   = '' + selectedTime2.getUTCHours() + ':' + selectedTime2.getUTCMinutes();
        $scope.carrera_Editar.hora_fin       = $scope.hora_fin_arreglada;
      }
    },
    inputTime: (((hora_finnal).getHours() * 60 * 60) + ((hora_finnal).getMinutes() * 60)), 
    format: 12,         //Optional
    step: 1,           //Optional
    setLabel: 'Guardar'    //Optional
  };
  ionicTimePicker.openTimePicker(Horafinal); 
};


 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Carrera Modificada',
     template: 'Esta Carrera ha sido modificado'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };

  $scope.GUARDARCARRERA = function(carrera_Editar){
 
    fecha_inicio = '' +      carrera_Editar.fecha_ini.getFullYear() + '-' + (  carrera_Editar.fecha_ini.getMonth() + 1 )    + '-' +      carrera_Editar.fecha_ini.getDate();
    fecha_fin = '' +     carrera_Editar.fecha_fin.getFullYear() + '-' +  ( carrera_Editar.fecha_ini.getMonth()  +1 ) + '-' +      carrera_Editar.fecha_ini.getDate();
  
    fechayhora_inicio   = fecha_inicio  + ' ' +   $scope.carrera_Editar.hora_ini;
    fechayhora_fin    = fecha_fin   + ' ' +   $scope.carrera_Editar.hora_fin;

  consulta = 'UPDATE carreras SET  taxi_id=?, taxista_id=?, zona=?, fecha_ini=?, lugar_inicio=?, lugar_fin=?, fecha_fin=?, estado=? where rowid=? '
    ConexionServ.query(consulta, [carrera_Editar.taxi, carrera_Editar.taxista, carrera_Editar.zona, fechayhora_inicio, carrera_Editar.lugar_inicio, carrera_Editar.lugar_fin, fechayhora_fin, carrera_Editar.estado, carrera_Editar.rowid]).then(function(result){
      console.log('se cargo la carrera', result);

      $scope.showAlert();
      $state.go('tab.carreras')
                 
     }), function(tx){
      console.log('error', tx);
    };
  } 

}); 
