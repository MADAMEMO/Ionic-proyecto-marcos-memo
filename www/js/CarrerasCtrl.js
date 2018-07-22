angular.module('starter')

.controller('CarrerasCtrl', function($scope, Chats, ConexionServ, $ionicLoading, $ionicPopup, ionicTimePicker, $state){

	$scope.go_modificar = function(rowid){
$state.go('tab.carreras-modificar')	
};

//  #/tab/carreras/{{Carrera.rowid}} //

  var Horainicial = {
    callback: function (val) {      //Mandatory
      if (typeof (val) === 'undefined') {
        console.log('Hora no colocada');
      } else {
      	selectedTime = new Date(val * 1000);

        $scope.hora_ini_arreglada 	= '' + selectedTime.getUTCHours() + ':' + selectedTime.getUTCMinutes();
        $scope.hora_ini 			= $scope.hora_ini_arreglada;
      }
    },
    //inputTime: 50400,   //Optional
    format: 12,         //Optional
    step: 1,           //Optional
    setLabel: 'Guardar'    //Optional
  };
    
  $scope.mostarhoraini = function (){
  ionicTimePicker.openTimePicker(Horainicial); };



  var Horafinal = {
    callback: function (val2) {      //Mandatory
      if (typeof (val2) === 'undefined') {
        console.log('Hora no colocada');
      } else {
      	selectedTime2 = new Date(val2 * 1000);

        $scope.hora_fin_arreglada 	= '' + selectedTime2.getUTCHours() + ':' + selectedTime2.getUTCMinutes();
        $scope.hora_fin 			= $scope.hora_fin_arreglada;
      }
    },
    //inputTime: 50400,   //Optional
    format: 12,         //Optional
    step: 1,           //Optional
    setLabel: 'Guardar'    //Optional
  };
   $scope.mostarhorafinal = function (){
  ionicTimePicker.openTimePicker(Horafinal); };



fecha = new Date();	
$scope.hora_ini = '' + fecha.getHours() + ':' + fecha.getMinutes();
$scope.hora_fin = '' + fecha.getHours() + ':' + fecha.getMinutes();
	 
	 


 $scope.eliminar = function(rowid) {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Eliminar',
     template: '¿Esta seguro de eliminar esta carrera?'
   });

   confirmPopup.then(function(res) {
     if(res) {
        consulta = 'DELETE FROM carreras Where rowid=?'
        ConexionServ.query(consulta, [rowid]).then(function(result){
          console.log('se elimino la carrera', result);
           $scope.traer_datos();
       
        }, function(tx){
          console.log('error', tx);
        });
     } else {
       return;
     }
   });
 };



	fecha = new Date();

	$scope.carrera_nuevo = {
		fecha_ini: fecha,
		fecha_fin: fecha,
	};
	



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
		


	$scope.CREARCARRERA = function(carrera_nuevo){

		console.log(carrera_nuevo.taxi)
		
		fecha_inicio 	= window.fixDate(carrera_nuevo.fecha_ini);
		fecha_fin 		= window.fixDate(carrera_nuevo.fecha_fin);
	
		fechayhora_inicio 	= fecha_inicio  + ' ' + $scope.hora_ini;
		fechayhora_fin 		= fecha_fin 	+ ' ' + $scope.hora_fin;

		consulta = 'INSERT INTO carreras (taxi_id, taxista_id, zona, fecha_ini, lugar_inicio, lugar_fin, fecha_fin, estado) VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
		ConexionServ.query(consulta, [carrera_nuevo.taxi,  carrera_nuevo.taxista, carrera_nuevo.zona, fechayhora_inicio, carrera_nuevo.lugar_inicio, carrera_nuevo.lugar_fin, fechayhora_fin, carrera_nuevo.estado]).then(function(result){
			console.log('se guardo la carrera papi', result);
					console.log(carrera_nuevo.taxi);
			$scope.traer_datos()
		}, function(tx){
			console.log('error', tx);
		});
		    $scope.ver2 = false;
	}

	  $scope.mostrartabla = function(usuario){
   
   $scope.ver2 = !$scope.ver2; 
 
  }



/*
$scope.traer_datos = function(){
	consulta = 'SELECT taxi_id, taxista_id, fecha_ini, lugar_inicio, lugar_fin, fecha_fin, estado, rowid from carreras'
		ConexionServ.query(consulta, []).then(function(result){
			$scope.carreras = result;
			console.log('se subio la carrera', result);

		}, function(tx){
			console.log('error', tx);

		});
}

*/

  $scope.traer_datos = function(){ 

	consulta = 'SELECT c.*, c.rowid, t.nombres, t.apellidos, tx.numero from carreras c ' + 
				'INNER JOIN taxistas t ON c.taxista_id = t.rowid ' + 
				'INNER JOIN taxis tx ON c.taxi_id = tx.rowid ' +
				'order by c.rowid desc';
	ConexionServ.query(consulta, []).then(function(result){
		$scope.carreras = result;
			for (var i = 0; i < $scope.carreras.length; i++) {
				$scope.carreras[i].fecha_ini = new Date($scope.carreras[i].fecha_ini);
				$scope.carreras[i].fecha_fin = new Date($scope.carreras[i].fecha_fin);
			}

			console.log('se trajeron las carreras',result);

		}, function(tx){
			console.log('error', tx);

		});

	}

	$scope.traer_datos()



	$scope.mostrareditar = function(){
		$scope.tablaeditar = true;

	}



    

	$scope.guardarcarrera = function(carrera_Editar){
	

		fecha_inicio = '' + carrera_Editar.fecha_ini.getFullYear() + '-' + (carrera_Editar.fecha_ini.getMonth() + 1 )    + '-' + carrera_Editar.fecha_ini.getDate();
		fecha_fin = '' + carrera_Editar.fecha_fin.getFullYear() + '-' +  (  carrera_Editar.fecha_ini.getMonth()  +1 ) + '-' + carrera_Editar.fecha_ini.getDate();
	
		hora_inicio = '' + carrera_Editar.hora_ini.getHours() + ':' +    carrera_Editar.hora_ini.getMinutes();   //+ (carrera_nuevo.hora_ini.getHours() >= 12 ? "PM" : "AM");
		hora_final = '' + carrera_Editar.hora_fin.getHours() + ':' +    carrera_Editar.hora_fin.getMinutes();   //+ (carrera_nuevo.hora_fin.getHours() >= 12 ? "PM" : "AM");
	
		fechayhora_inicio 	= fecha_inicio  + ' ' + hora_inicio;
		fechayhora_fin 		= fecha_fin 	+ ' ' + hora_final;

		consulta = 'UPDATE carreras SET  taxi_id=?, taxista_id=?, zona=?, fecha_ini=?, lugar_inicio=?, lugar_fin=?, fecha_fin=?, estado=? where rowid=? '
		ConexionServ.query(consulta, [carrera_Editar.taxi.rowid, carrera_Editar.taxista.rowid, carrera_Editar.zona, fechayhora_inicio, carrera_Editar.lugar_inicio, carrera_Editar.lugar_fin, fechayhora_fin, carrera_Editar.estado, carrera_Editar.rowid]).then(function(result){
			console.log('se cargo la carrera', result);

$scope.traer_datos()
 $scope.ver = false;
		}, function(tx){
			console.log('error', tx);
		});
	}	


$scope.modificarcarrera =function(carrera){
	
	for (var i = 0; i < $scope.carreras.length; i++) {
		$scope.carreras[i].seleccionada = false;
	}

	carrera.seleccionada = true;
	$scope.carrera_estado = carrera;

}



	$scope.en_curso = function(carrera_estado){

		consulta = 'UPDATE carreras SET estado=? where rowid=? '
		ConexionServ.query(consulta, ['En curso', carrera_estado.rowid]).then(function(result){
			console.log('se cargo la carrera', result);

			carrera_estado.estado = 'En curso';

		}, function(tx){
			console.log('error', tx);
		});

	}

$scope.finalizada = function(carrera_estado){

consulta = 'UPDATE carreras SET estado=? where rowid=? '
		ConexionServ.query(consulta, ['Finalizada', carrera_estado.rowid]).then(function(result){
			console.log('se cargo la carrera', result);
							carrera_estado.estado = 'Finalizada';

		}, function(tx){
			console.log('error', tx);
		});

}

$scope.cancelada = function(carrera_estado){

consulta = 'UPDATE carreras SET estado=? where rowid=? '
		ConexionServ.query(consulta, ['Cancelada', carrera_estado.rowid]).then(function(result){
			console.log('se cargo la carrera', result);
					carrera_estado.estado = 'Cancelada';

		}, function(tx){
			console.log('error', tx);
		});

}


});