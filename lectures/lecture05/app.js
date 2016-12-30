(function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function ($scope) {
    $scope.name = 'Rodrigo';
    $scope.sayHello = function () {
      return 'Hello ' + $scope.name;
    };
  });
})();
