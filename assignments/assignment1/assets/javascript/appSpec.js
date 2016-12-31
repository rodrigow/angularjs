describe('Assignment 1 - LunchCheckController', function() {
  beforeEach(module('LunchCheck'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.checkDishes', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('LunchCheckController', { $scope: $scope });
    });

    it('tells users to Please enter data first', function () {
      $scope.dishes = '';
      $scope.checkDishes();
      expect($scope.message).toEqual('Please enter data first');
    });

    it("tells user to Enjoy!", function () {
      $scope.dishes = 'salad, water';
      $scope.checkDishes();
      expect($scope.message).toEqual('Enjoy!');
    });

    it("tells user that they ate Too Much!", function () {
      $scope.dishes = 'cake, soda, fries, cigar';
      $scope.checkDishes();
      expect($scope.message).toEqual('Too Much!');
    });

    it("shows the user a green color when one input is entered", function () {
      $scope.dishes = 'bread';
      $scope.checkDishes();
      expect($scope.paint).toEqual('text-success');
    });

    it("shows the user a green color when four inputs are entered", function () {
      $scope.dishes = 'bread, eggs, bacon, milk';
      $scope.checkDishes();
      expect($scope.paint).toEqual('text-success');
    });

    it("shows the user a red color when no input is entered", function () {
      $scope.dishes = '';
      $scope.checkDishes();
      expect($scope.paint).toEqual('text-danger');
    });

    xit("eliminates empty options", function () {
      $scope.dishes = ',';
      $scope.checkDishes();
      expect($scope.message).toEqual('Please enter data first');
    });

    xit("shows correct message with first option empty", function () {
      $scope.dishes = ',bread,butter,jam';
      $scope.checkDishes();
      expect($scope.message).toEqual('Enjoy!');
    });

    xit("shows correct message with last option empty", function () {
      $scope.dishes = 'bread,butter,jam,';
      $scope.checkDishes();
      expect($scope.message).toEqual('Enjoy!');
    });

  });
});
