// Desenvolvido por Mateus Almeida: mateusdarosadealmeida@gmail.com
angular.module('alimentosApp.controllers', [])

.controller('CategoriasCtrl', function($scope, Categorias) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.categorias = Categorias.all();
})

.controller('CategoriasDetalhesCtrl', function($scope, $stateParams, Categorias) {
  $scope.categoria = Categorias.get($stateParams.categoriaId);
  $scope.categorias = Categorias.all();
})

.controller('AlimentoCtrl', function($scope, $stateParams, Categorias) {
  $scope.categoria = Categorias.get($stateParams.categoriaId);
  $scope.alimento = Categorias.get($stateParams.categoriaId);

  angular.forEach($scope.alimento.alimentos, function(value, key) {
    if(value.id == $stateParams.alimentoId && $scope.alimento.id == $stateParams.categoriaId) {
      $scope.ali = value;
    } 
  })
});