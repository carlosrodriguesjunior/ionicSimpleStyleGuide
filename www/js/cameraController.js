(function() {
  'use strict';

var module  = angular.module(myAppName);

  function CameraController($scope,$cordovaBarcodeScanner) {
    var vm = this;
    vm.title = "Camera";

    vm.scan = function  (){
      $cordovaBarcodeScanner
    .scan()
    .then(function(barcodeData) {
      alert( JSON.stringify( barcodeData));
    }, function(error) {
      alert(error);
    });
    };
  }

  CameraController.$inject =['$scope','$cordovaBarcodeScanner'];

  module.controller('cameraController', CameraController);

  module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state(module.name + '.camera', {
        url: '/camera',
        displayName: "camera",
        views: {
          'main': {
            templateUrl: 'templates/cameraView.html',
            controller: 'cameraController as vm'
          }
        },

      });

  }]);

})();
