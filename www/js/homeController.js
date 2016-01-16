(function() {
  'use strict';

var module  = angular.module(myAppName);
  function HomeController($scope) {
    var vm = this;

    vm.title = "Carlao Template";
  }

  HomeController.$inject =['$scope'];

  module.controller('homeController', HomeController);


  module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state(module.name + '.home', {
        url: '/home',
        displayName: "home",
        views: {
          'main': {
            templateUrl: 'templates/homeView.html',
            controller: 'homeController as vm'
          }
        },

      });

  }]);

})();
