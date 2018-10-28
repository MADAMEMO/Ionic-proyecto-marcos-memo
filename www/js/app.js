// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-timepicker'])

.constant('rutaServidor', {
    //ruta: 'http://edilson.micolevirtual.com/feryz_server/public/'
    ruta: 'http://192.168.100.31/feryz_server/public/'
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, ionicTimePickerProvider) {

  var timePickerObj = {
    inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
    format: 12,
    step: 15,
    setLabel: 'Aceptar',
    closeLabel: 'Cancelar'
  };
  ionicTimePickerProvider.configTimePicker(timePickerObj);


  $ionicConfigProvider.tabs.position('bottom');
  
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      controller: 'TabCtrl',
      templateUrl: 'templates/tabs.html',
      resolve: {
        USER: ['AuthServ', '$state', function(AuthServ, $state){
          return AuthServ.verificar_user_logueado().then(function(u){
            return u;
          }, function(){
            $state.go('login');
          });
        }]
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })



  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

  .state('tab.taxis', {
      url: '/taxis',
      views: {
        'tab-taxis': {
          templateUrl: 'templates/taxis.html',
          controller: 'taxisCtrl'
        }
      }
    })

    .state('tab.taxistas', {
      url: '/taxistas',
      views: {
        'tab-taxistas': {
          templateUrl: 'templates/taxistas.html',
          controller: 'TaxistasCtrl'
        }
      }
    })
  
    .state('tab.carreras', {
      url: '/carreras',
      views: {
        'tab-carreras': {
          templateUrl: 'templates/carreras.html',
          controller: 'CarrerasCtrl'
        }
      }
    })
  

  .state('tab.nube', {
    url: '/nube',
    views: {
      'tab-nube': {
        templateUrl: 'templates/nube.html',
        controller: 'nubeCtrl'
      }
    }
  })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.taxistas-modificar', {
      url: '/taxistas/:taxistaId',
      views: {
        'tab-taxistas': {
          templateUrl: 'templates/taxistas-modificar.html',
          controller: 'taxistasmodificarCtrl'
        }
      }
    })
      .state('tab.carreras-modificar', {
      url: '/carreras/:carreraId',
      views: {
        'tab-carreras': {
          templateUrl: 'templates/carreras-modificar.html',
          controller: 'carrerasmodificarCtrl'
        }
      }
    })




     .state('tab.taxis-modificar', {
      url: '/taxis/:taxiId',
      views: {
        'tab-taxis': {
          templateUrl: 'templates/taxi-modificar.html',
          controller: 'taximodificarCtrl'
        }
      }
    })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});




window.fixDate = function(fec){
  dia   = fec.getDate();
  mes   = (fec.getMonth() + 1 );
  year  = fec.getFullYear();

  if (dia < 10) {
    dia = '0' + dia;
  }

  if (mes < 10) {
    mes = '0' + mes;
  }

  fecha   = '' + year + '-' + mes  + '-' + dia;

  return fecha;
}

