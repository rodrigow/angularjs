(function () {
  'use strict';


  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (service) {
    var toBuy = this;

    toBuy.items = service.getItems();
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var alreadyBought = this;

  };

  function ShoppingListCheckOffService() {
    var service = this;

    var data = [
      { name: "butter", quantity: 3, bought: false },
      { name: "sugar", quantity: 5, bought: false },
      { name: "chocolate chips", quantity: 1, bought: false },
      { name: "flour", quantity: 2, bought: false }
    ];

    service.getItems = function () {
      return data;
    };
  }

})();
