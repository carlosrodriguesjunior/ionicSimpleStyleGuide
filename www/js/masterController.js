(function() {
  'use strict';

var module  = angular.module(myAppName);
  function MasterController($scope,$state) {
    var vm = this;

    vm.goToPlugin = function  (){
        $state.go(myAppName+'.camera');
    };
    
    vm.goToRest = function  (){
        $state.go(myAppName+'.rest');
    };
  }

  MasterController.$inject =['$scope','$state'];

  module.controller('masterController', MasterController);

})();
