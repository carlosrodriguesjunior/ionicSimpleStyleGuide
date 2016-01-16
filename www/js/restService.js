(function() {
  'use strict';

var module  = angular.module(myAppName);

function RestService($resource) {
    return $resource('http://linkapi-app.cloudapp.net:8081/api/v1/users', {},
    {
        'get': { method: 'GET' },
        'save': { method: 'POST' },
        'update': { method: 'PUT' },
        'query': { method: 'GET', isArray:true },
        'remove': { method: 'DELETE' }
    });
  }
  RestService.$inject=['$resource'];

  module.service('restService', ['$resource', RestService]);

})();
