(function () {
  'use strict';


  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (service) {
    var toBuy = this;

    toBuy.items = service.getItemsToBuy();

    toBuy.hasItemsToBuy = function () {
        return toBuy.items.length > 0;
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var alreadyBought = this;

  };

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      { name: "butter", quantity: 3 },
      { name: "sugar", quantity: 5 },
      { name: "chocolate chips", quantity: 1 },
      { name: "flour", quantity: 2 }
    ];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };
  }

})();
