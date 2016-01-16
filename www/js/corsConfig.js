(function() {
  'use strict';

  angular.module(myAppName).config(['$httpProvider', '$sceDelegateProvider', function ($httpProvider, $sceDelegateProvider) {

      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
      //$httpProvider.defaults.withCredentials = true;

      $sceDelegateProvider.resourceUrlWhitelist(['**']);
  }]);

})();
