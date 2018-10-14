	angular.module('starter')

.controller('TabCtrl', function($scope, ConexionServ,  $ionicSideMenuDelegate, USER) {

	console.log(USER);
	$scope.USER = USER;
})


.controller('DashCtrl', function($scope, ConexionServ,  $ionicSideMenuDelegate, USER) {

	$scope.USER = USER;

	function onSuccess(position) {

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 14
    });
  }

  // onError Callback receives a PositionError object
  //
  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  }

  // Options: throw an error if no update is received every 30 seconds.
  //
  var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { maximumAge: 3000, timeout: 10000000, enableHighAccuracy: true });


  console.log(watchID)





	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};

  	ConexionServ.createTables();

    $scope.insertar_datos_iniciales = function() {

    	consulta = "SELECT * from users ";
   		ConexionServ.query(consulta, []).then(function(result) {
			if (result.length == 0) {




		consulta = 'INSERT INTO carreras (taxi_id, taxista_id, zona, fecha_ini, lugar_inicio, lugar_fin, fecha_fin, estado) VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
				ConexionServ.query(consulta, [2,2,'z1','2018-07-22 16:26','el parque','el parque2','mana','cancelada']).then(function(result){

					}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
					ConexionServ.query(consulta, [23,21,'z1','2018-07-22','los lanceros','el parque2','2018-07-22','cancelada']).then(function(result){

					}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
					ConexionServ.query(consulta, [5,12,'z1','2018-07-22','calle 14#22-56','el parque2','2018-07-22','cancelada']).then(function(result){

					}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
					ConexionServ.query(consulta, [26,22,'z1','2018-07-22','barrio las ferias','el parque2','2018-07-22','cancelada']).then(function(result){

					}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
					ConexionServ.query(consulta, [12,22,'z1','2018-07-22','barrio el cielo','el parque2','2018-07-22','cancelada']).then(function(result){

					}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
					ConexionServ.query(consulta, [64,33,'z1','2018-07-22','donde el goyo','el parque2','2018-07-22','cancelada']).then(function(result){

					}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
					ConexionServ.query(consulta, [11,32,'z1','2018-07-22','en mi casa','el parque2','2018-07-22','cancelada']).then(function(result){

					}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


		consulta = "INSERT INTO users(nombres, apellidos, usuario, password, tipo, sexo) VALUES(?,?,?,?,?,?) ";
				ConexionServ.query(consulta, ['Marinella', 'Silva Gonzalez', 'Marycita',  '123', 'Admin', 'M']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['JUAN CAMILO', 'MANRRIQUE', 'juan',  '123', 'Admin', 'M']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['DANIEL', 'GRANDAS', 'daniel',  '123', 'Operador', 'M']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['EDILSON', 'MARQUEZ', 'edilson',  '123', 'Operador', 'M']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['FELIX', 'DÍAZ', 'felix',  '123', 'Operador', 'M']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				// Taxis


				consulta = "INSERT INTO taxis( placa, numero, taxista_id) VALUES(?,?,?) ";
				ConexionServ.query(consulta, ['SMJ-594', '017', 1]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['SMJ-686', '019', 2]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-648', '024', 3]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-577', '025', 4]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-639', '035', 5]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-308', '045', 6]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-119', '047', 7]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-688', '048', 8]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-191', '051', 9]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-108', '057', 10]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-627', '059', 11]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-644', '060', 12]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-128', '062', 13]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-670', '063', 14]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-607', '071', 15]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-287', '076', 16]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-249', '078', 17]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-517', '079', 18]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-243', '082', 19]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-668', '084', 20]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, ['YAU-214', '085', 21]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-239', '086', 22]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-220', '088', 23]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-220', '088', 23]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

		ConexionServ.query(consulta, ['SMJ-679', '092', 24]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-671', '093', 25]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-268', '094', 26]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-241', '099', 27]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

		ConexionServ.query(consulta, ['SMJ-605', '100', 28]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-519', '102', 29]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-532', '104', 30]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-506', '105', 31]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

		ConexionServ.query(consulta, ['SMJ-512', '107', 32]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-115', '110', 33]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-564', '112', 34]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-608', '113', 35]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

		ConexionServ.query(consulta, ['SMJ-692', '115', 36]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-336', '116', 37]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-327', '118', 38]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-554', '119', 39]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

		ConexionServ.query(consulta, ['SMJ-603', '122', 40]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-573', '123', 41]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-547', '124', 42]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-132', '125', 43]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

		ConexionServ.query(consulta, ['SMJ-568', '128', 44]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-561', '130', 45]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-581', '131', 46]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-591', '132', 47]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-601', '133', 48]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-597', '134', 49]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-538', '136', 50]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, ['SMJ-520', '139', 51]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-579', '140', 52]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-582', '142', 53]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, ['SMJ-604', '143', 54]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-595', '145', 55]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-628', '147', 56]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, ['SMJ-566', '148', 57]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-584', '149', 58]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-658', '151', 59]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, ['SMJ-575', '152', 60]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['YAU-215', '153', 61]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-539', '156', 62]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, ['YAU-297', '159', 63]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-500', '160', 64]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-643', '165', 65]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, ['YAU-298', '166', 66]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-657', '170', 67]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-563', '171', 68]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, ['SMJ-696', '173', 69]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-689', '174', 70]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['SMJ-693', '176', 71]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});





				consulta = "INSERT INTO taxistas(nombres, apellidos, sexo, usuario, documento, celular, password) VALUES(?,?,?,?,?,?,?) ";
				ConexionServ.query(consulta, ['Soloza', 'Gilberto', 'M', 'SolozaG', '96191454','320 856 1398', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Sandra Patricia', 'Navas Abril', 'F', 'SandraP', '23913131', '313 892 9533', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Juan Carlos ', 'Ortega ', 'M', 'JuanC23', '23913131', '320 856 1398', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['Jesus Marino', 'Gomez Gomez', 'M', 'JesusM2', '17546992', '310 568 0860', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['Jose David', 'Rivera Espinosa', 'M', 'Jose22', '96194337', '312 493 9028', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['Wilmar Jesus', 'Vega Pelayo ', 'M', 'Wilmar32', '68301687', '312 801 6855', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['Edilson', 'Riaño Bermudez ', 'M', 'Edilson5', '23913131', '320 856 1398', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['Luz Mery', 'Reyes Leon ', 'F', 'Luz22', '68.302.732', '311 820 2654', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Luis Hernando ', 'Silva Bernal ', 'M', 'Luis227', '80.725.143', '311 531 2303'], '123').then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, [' Nilce', 'Calderon Benavides  ', 'M', 'Nilce1', '68.301.705', '312 333 5014', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


			ConexionServ.query(consulta, [' Esteban', ' Martinez Gomez  ', 'M', 'Esteban222', '17.549.111', '312 497 4989', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


			ConexionServ.query(consulta, [' Benjamin', 'Ochoa Castro ', 'M', 'Benjamin123', '96.192.130', '312 423 2820', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


			ConexionServ.query(consulta, [' Jose De Jesus', 'Ortiz Ospina  ', 'M', 'Jose653', '1.039.400.302', '320 209 8524', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


			ConexionServ.query(consulta, [' Serafin', 'Mateus Merchan ', 'M', 'Serafin33', '3.021.893', '311 854 0977', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, [' Jose Agustin', 'Pineda Mendez ', 'M', 'Agustin22', '79.125.243', '320 908 1908', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['Amin Exdunio', 'Rios Gomez ', 'M', 'Amin444', '17.547.961', '312 497 4989', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Edwin Jovan', 'Parra Molina ', 'M', 'Edwin77', '91.518.854', '314 254 3095', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Wilfer', 'Higuera Delgado ', 'M', 'Wilfer33', '91.183.816', '311 469 0924', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Luis Noel', 'Vega Ramos  ', 'M', 'Luis4423', '17.548.656', '311 242 7456', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['  Mauricio ', 'Pinzon Pinzon  ', 'M', 'Mauricio55', '13.958.889', '313 516 3106', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Gerardo', ' Benitez Sierra  ', 'M', 'Gerardo22', '96.191.318', '321 466 4823', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Obet', 'Parada Parada  ', 'M', 'Obet', '7.361.169', '312 482 5821', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Luis Eduardo', 'Albino Pinzon', 'M', 'LuisE', '5.695.514', '315 342 9342', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Leidy Milena', 'Angarita Saavedra ', 'F', 'Leidy22', '1.116.782.854', '310 281 3772', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Maria De Jesus', 'Salazar Leon  ', 'F', 'Salazar512', '24.099.415', '310 567 4501', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Astrid Helena ', 'Castañeda Torres ', 'F', 'Astrid11', '1.098.607.777', '313 449 2272', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, [' Claudia Maria ', 'Carrillo Monar ', 'F', 'Claudia45', '68.248.987', '312 363 2064', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Heladio ', 'Alvarez Niño  ', 'M', 'HeladioAlv', '17.546.244', '312 377 4505', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Cecilio', 'Antolinez Correa ', 'M', 'Cecilio66', '96.192.103', '321 210 8932', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, [' Isai', 'Rivera Espinosa  ', 'M', 'Isai15', '96.195.766', '310 2851 582', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Diana Lorena', 'Alvarado Velandia ', 'M', 'Diana41', '1.116.869.099', '312 402 5216', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Luis Fransisco', 'Parada Parada  ', 'M', 'Luis64', '7.311.169', '312 561 7271', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


			ConexionServ.query(consulta, [' Zaida Yolima', 'Romero Chagualo ', 'M', 'Zaida33', '53.133.310', '321 398 7425', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Alexander', 'Ortiz  ', 'M', 'AlexanderOrt', '96.192.100', '313 261 7455', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Esteban Jhon Jairo', 'Gomez', 'M', 'Esteban622', '96.195.304', '312 554 8299', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, [' Maria De Jesus ', 'Salazar Leon   ', 'F', 'Salazar512', '24.099.415', '310 567 4501', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Arnovis', 'Olaya Ortiz  ', 'M', 'Arnovis33', '17.588.825', '320 275 7062', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['  Reynaldo', 'Rodriguez Infante  ', 'M', 'Reynaldo22', '17.549.988', '312 432 3114', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


			ConexionServ.query(consulta, ['  Ricardo', 'Roa Daza  ', 'M', 'Ricardo11', '96.195.119', '311 233 0602', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Heris', 'Albarracin Arismendi  ', 'F', 'Heris33', '17.549.126', '314 402 1829', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Ana Leidis', 'Olivos Dulcey  ', 'F', 'Ana20', '68.290.339', '310 773 8148', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

			ConexionServ.query(consulta, [' Jimmy Arturo', 'Niño Lavados   ', 'M', 'JimmyLa', '96.192.906', '312 573 2895', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Odila', 'Solano Rodriguez  ', 'F', 'OdilaSo', '68.306.982', '3108579063', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Jimmy Orosman', 'Guerrero Rincon   ', 'M', 'JimmyOr', '86.082.062', '311 281 3785', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Odila', 'Solano Rodriguez  ', 'F', 'OdilaSo', '68.306.982', '3108579063', '123',]).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Odila', 'Solano Rodriguez  ', 'M', 'OdilaSo', '68.306.982', '3108579063', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Faber Giovanny', 'Parales Barrera  ', 'M', 'OdilaSo', '1.116.853.819', '3311 484 4932', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
		ConexionServ.query(consulta, [' Carlos Andres', 'Avila Castiblanco ', 'M', 'OdilaSo', '96.194.131', '313 232 8642', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Edgar Esneyder ', 'Carrera Yunda  ', 'M', 'OdilaSo', '1.116.863.223', '3222914708', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Martha Nancy', 'Solano Rodriguez  ', 'F', 'OdilaSo', '40.774.728', '310 862 1183', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
		ConexionServ.query(consulta, [' Jose Tebaldo', 'Solano Leon   ', 'M', 'OdilaSo', '74.300.064', '313 821 5679', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Alonso ', 'Florez Heber  ', 'M', 'OdilaSo', '96.192.501', '3114445393', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Roberth Leandro ', 'Parales Barrera  ', 'M', 'OdilaSo', '1.116.863.405', '320 242 2938', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Gladys ', 'Castillo Torres   ', 'F', 'OdilaSo', '24.245.406', '3208568416 ', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Lida Rocio ', 'Cruz Lizcano   ', 'M', 'OdilaSo', '60.335.897', '3112679405', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Faber Giovanny ', 'Parales Barrera  ', 'M', 'OdilaSo', '1.116.853.819', '311 484 4932', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Romulo Jose  ', 'Bello Ramirez  ', 'M', 'OdilaSo', '86.088.510', '3146562341', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Deibin Johan ', 'Olaya Goyeneche  ', 'M', 'OdilaSo', '1.116.856.895', '3125045393', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Jaider  ', 'Castillo Campos   ', 'M', 'OdilaSo', '5.047.642', '311233526', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Luis Alberto ', 'Rodriguez Rodriguez  ', 'M', 'OdilaSo', '19.381.240', '310 766 9570', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Jorge Alberto  ', 'Sosa Valderrama  ', 'M', 'OdilaSo', '7.217.328', '3115571308', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Ivan ', 'Ariza Niño  ', 'M', 'OdilaSo', '96.191.672', '3125422882', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Elvis Moises ', 'Valbuena Cobos  ', 'M', 'OdilaSo', '1.116.852.129', '3508216117', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Humberto  ', 'Herrera Rodriguez   ', 'M', 'OdilaSo', '96.194.752', '3115859125', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, ['  Carlina ', 'Correa Antolinez ', 'M', 'OdilaSo', '24.248.877', '3124819799', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Maria Kaory ', 'Rojas Lagos ', 'M', 'OdilaSo', '68.305.243', '3202758531', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Marisol ', 'Rivera Espinosa   ', 'M', 'OdilaSo', '68.304.364', '3142679470', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Amin Exdunio ', 'Rios Gomez ', 'M', 'OdilaSo', '17.547.961', '3124974989', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Ildebrando ', 'Leal Carvajal ', 'M', 'OdilaSo', '19.397.853', '3107704276', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Willian Fernando  ', 'Duque Acosta', 'M', 'OdilaSo', '17.548.791', '3103231887', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				ConexionServ.query(consulta, [' Nancy Consuelo ', 'Martinez Leon ', 'F', 'OdilaSo', '23.588.863', '3142996805', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, [' Judith ', 'Manrique Peña  ', 'F', 'OdilaSo', '51.707.358', '3163607652', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
			ConexionServ.query(consulta, ['  German	 ', 'Mora Gutierrez ', 'M', 'OdilaSo', '96.189.594', '3203439507', '123']).then(function(result) {

				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});



			}

        }, function(tx) {
          console.log("", tx);
		});

	};

	$scope.insertar_datos_iniciales();


})


.controller('AccountCtrl', function($scope, $http, $filter, ConexionServ, AuthServ,  $state) {
 	
 	console.log($scope.USER);
 
   $scope.passwords = {
   		antiguo: '',
   		nuevo: '',
   		nuevo2: ''
   };

	$scope.GUARDARUSUARIO = function(usu){
			fecha_nac = '' + usu.fecha_nac.getFullYear() + '-' + (usu.fecha_nac.getMonth() + 1) + '-' + usu.fecha_nac.getDate();
		consulta = 'UPDATE users SET  nombres=?, apellidos=?, sexo=?, documento=?, celular=?, fecha_nac=? where rowid=?'
		ConexionServ.query(consulta, [usu.nombres,usu.apellidos, usu.sexo, usu.documento, usu.celular,fecha_nac,  usu.rowid]).then(function(result){
			console.log('se cargo el usuario', result);
			AuthServ.update_user_storage(usu);
			
		}, function(tx){
			console.log('error', tx);

		});
	
	}	

	$scope.cambiar_pass = function(passwords){


		if (passwords.nuevo != passwords.nuevo2) {
			console.log('No coincide la contraseña nueva');
			return;
		}
		
		datos = { username: $scope.USER.usuario, password: passwords.antiguo}
		
		AuthServ.loguear(datos).then(function(){
			
			consulta = 'UPDATE users SET password=? WHERE rowid=?';
			ConexionServ.query(consulta, [passwords.nuevo, $scope.USER.rowid]).then(function(){
			console.log('CONTRASEÑA CAMBIADA', result);	
			}, function(){
			console.log('CONTRASEÑA NO CAMBIADA', result);		
			})

		}, function(err){
		console.log('CONTRASEÑA ANTIGUA INVALIDA ', err);		
		
		});
	}	







});
