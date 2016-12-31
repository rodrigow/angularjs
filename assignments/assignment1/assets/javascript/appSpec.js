describe('LunchCheckController', function() {
  beforeEach(module('LunchCheck'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.checkDishes', function() {
    it('tells users to enter data first', function () {
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });
      $scope.dishes = '';
      $scope.checkDishes();
      expect($scope.message).toEqual('Please enter data first');
    });
  });
});
