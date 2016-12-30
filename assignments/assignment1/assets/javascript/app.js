(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.message = '';
    $scope.dishes = '';

    $scope.checkDishes = function () {
      if ($scope.dishes) {
        var dishList = $scope.dishes.split(',');
        if (dishList) {
          if (dishList.length > 3) {
            $scope.setMessage('Too much!');
          } else {
            $scope.setMessage('Enjoy!');
          }
        }
      } else {
        $scope.setMessage('Please enter data first');
      }
    }

    $scope.setMessage = function (message) {
      $scope.message = message;
    }
  }
})();
