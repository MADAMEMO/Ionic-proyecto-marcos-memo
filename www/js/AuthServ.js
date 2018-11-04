angular.module('starter')

.factory('AuthServ', function($q, $http, $timeout, ConexionServ, $state) {




    result = {

        verificar_user_logueado: function(){
            var defered = $q.defer();

            if (localStorage.logueado){

                if (localStorage.logueado == 'true'){

                    usu = localStorage.USER;
                    usu = JSON.parse(usu);
                    defered.resolve(usu);

                }else{
                    $state.go('login');
                    defered.reject('No logueado');
                }
            }else{
                defered.reject('No logueado')
            }


            return defered.promise;

        },

        loguear: function(datos){
            var defered = $q.defer();

            console.log(datos);

            consulta = '';

            if (datos.tipo == 'Operador') {

                consulta = 'SELECT u.rowid, u.id, u.nombres, u.apellidos, u.usuario, u.sexo, u.celular, u.documento, u.tipo '+
                        'FROM users u '+
                        'WHERE  u.usuario=? and u.password=? ' ;

            }else{

                consulta = 'SELECT t.rowid, t.id, t.nombres, t.apellidos, t.sexo, t.celular, t.documento, tx.id as taxi_id '+
                        'FROM taxistas t INNER JOIN taxis tx ON tx.taxista_id=t.id '+
                        'WHERE t.usuario=? and t.password=? ' ;

            }

            ConexionServ.query(consulta, [datos.username, datos.password]).then(function(result){

                if (result.length > 0) {
                    localStorage.logueado   = true
                    localStorage.USER       = JSON.stringify(result[0]);
                    defered.resolve(result[0]);
                }else{
                    defered.reject('DATOS INVÁLIDOS')
                }

            }, function(){
                console.log('Error logueando');
                defered.reject('Error logueando')
            })

            return defered.promise;

        },

        get_user: function(){

            if (localStorage.logueado){
                if (localStorage.logueado == 'true'){

                    usu = localStorage.USER;
                    usu = JSON.parse(usu);
                    return usu;
                }else{
                    $state.go('login');
                }
            }else{
                $state.go('login');
            }


        },

        update_user_storage: function(datos){
            var defered = $q.defer();


            consulta = 'SELECT u.rowid, u.id, u.nombres, u.apellidos, u.usuario, u.sexo, u.celular, u.documento, u.tipo '+
                        'FROM users u '+
                        'WHERE  u.rowid=? ' ;


            ConexionServ.query(consulta, [datos.rowid]).then(function(result){

                if (result.length > 0) {
                    localStorage.logueado   = true
                    localStorage.USER       = JSON.stringify(result[0]);
                    defered.resolve(result[0]);
                }else{
                    console.log('Cero usuarios');
                    defered.reject('Cero usuarios')
                }

            }, function(){
                console.log('Error logueando');
                defered.reject('Error logueando')
            })

            return defered.promise;

        },

        cerrar_sesion: function(datos){
            localStorage.logueado   = false
            delete localStorage.USER;
            $state.go('login');
        },

    }


    return result;

});
