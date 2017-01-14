(function () {
  'use strict';


  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController);
  // .service('', );

  ToBuyController.$inject = ['$scope'];
  function ToBuyController ($scope) {
    var toBuy = this;
    
  };

  AlreadyBoughtController.$inject = ['$scope'];
  function AlreadyBoughtController ($scope) {
    var alreadyBought = this;

  };

})();
