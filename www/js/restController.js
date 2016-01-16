(function() {
  'use strict';

var module  = angular.module(myAppName);
  function RestController($scope,restService,$http) {
    var vm = this;
    $http.defaults.headers.common['Authorization']= 'Bearer c802477f89f8e7758cbd0fff3553b4807a1f1ce2';

    vm.title = "Rest";
    vm.items = [];

    function loadData(){
      restService.query({
        }, function (response) {
          vm.items = response;
        });
    };

    loadData();



      vm.delete = function (item) {

        restService.remove({
          id: item._id
        }, function (response) {

          loadData();
        });

      };

      vm.add = function () {

        restService.save({

            "name": "teste carlao",
            "login": "ttcarlao",
            "password": "1234",
            "company": "560401b3b4018b853acd9a48",
            "email": "carlos.junior@fcamara.com.br"

        }, function (response) {

            loadData();

        });

      };


  }

  RestController.$inject =['$scope','restService','$http'];

  module.controller('restController', RestController);


  module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state(module.name + '.rest', {
        url: '/rest',
        displayName: "rest",
        views: {
          'main': {
            templateUrl: 'templates/restView.html',
            controller: 'restController as vm'
          }
        },

      });

  }]);

})();
