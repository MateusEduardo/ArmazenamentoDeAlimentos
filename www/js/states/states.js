// Desenvolvido por Mateus Almeida: mateusdarosadealmeida@gmail.com
angular.module('alimentosApp', ['ionic', 'alimentosApp.controllers', 'alimentosApp.services'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.categorias', {
      url: '/categorias',
      views: {
        'tab-categorias': {
          templateUrl: 'templates/tab-categorias.html',
          controller: 'CategoriasCtrl'
        }
      }
    })
    .state('tab.categoria-detail', {
      url: '/categorias/:categoriaId',
      views: {
        'tab-categorias': {
          templateUrl: 'templates/categoria-detail.html',
          controller: 'CategoriasDetalhesCtrl'
        }
      }
    })
    .state('tab.alimento', {
      url: '/categorias/:categoriaId/alimentos/:alimentoId',
      views: {
        'tab-categorias': {
          templateUrl: 'templates/alimento.html',
          controller: 'AlimentoCtrl'
        }
      }
    })

  .state('tab.referencias', {
    url: '/referencias',
    views: {
      'tab-referencias': {
        templateUrl: 'templates/tab-referencias.html'
      }
    }
  })

  .state('tab.sobre', {
    url: '/sobre',
    views: {
      'tab-sobre': {
        templateUrl: 'templates/tab-sobre.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/categorias');

});
