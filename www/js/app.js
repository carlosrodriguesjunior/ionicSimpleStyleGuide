angular.module(myAppName, ['ionic','ngCordova','ngResource'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    // setup an abstract state for the tabs directive
    .state(myAppName, {
      url: "/"+ myAppName,
      abstract: true,
      templateUrl: "templates/masterPageView.html",
      controller:"masterController as vm"
    })

  $urlRouterProvider.otherwise(myAppName+'/home');

});
