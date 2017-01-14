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

    toBuy.buy = function (index) {
      service.buy(index);
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (service) {
    var alreadyBought = this;

    alreadyBought.items = service.getItemsBought();

    alreadyBought.hasItemsBought = function () {
        return alreadyBought.items.length === 0;
    }
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

    var itemsBought = [ ];

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.buy = function (index) {
      itemsBought.push(itemsToBuy.splice(index, 1)[0]);
    }
  }

})();
