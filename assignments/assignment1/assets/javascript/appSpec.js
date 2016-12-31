describe('Assignment 1 - LunchCheckController', function() {
  beforeEach(module('LunchCheck'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.checkDishes', function() {
    it('tells users to Please enter data first', function () {
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });
      $scope.dishes = '';
      $scope.checkDishes();
      expect($scope.message).toEqual('Please enter data first');
    });

    it("tells user to Enjoy!", function () {
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });
      $scope.dishes = 'salad, water';
      $scope.checkDishes();
      expect($scope.message).toEqual('Enjoy!');
    });

    it("tells user that they ate Too Much!", function () {
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });
      $scope.dishes = 'cake, soda, fries, cigar';
      $scope.checkDishes();
      expect($scope.message).toEqual('Too Much!');
    });

  });
});
