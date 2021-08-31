"use strict";
function numberUnits(a) {
  if (a > 999 || a < 0 || a % 1 != 0 || typeof a != "number") {
    console.log("Неверное число");
    return {};
  }
  let arr = ["Еденицы", "Десятки", "Сотни"],
    objUnits = {};
  for (let i = 0, divider = 10; i < arr.length; i++) {
    objUnits[arr[i]] = a % divider;
    a = Math.floor(a / divider);
  }
  return objUnits;
}
//

let productCatalog = {
  products: [{ name: "apple", price: 5 }],
  Product: function (name, price) {
    this.name = name;
    this.price = price;
  },
  addProduct(name, price) {
    this.products.push(new this.Product(name, price));
  },
  returnPrice(name) {
    return this.products.find((item) => item.name == name).price;
  },
};
productCatalog.addProduct("banana", 12);
productCatalog.addProduct("tomat", 7);


//
let productBusket = {
  basket: {},
  addToBasket(name, count) {
    this.basket[name] = count;
  },
  countBasketPrice() {
    let countBasket = 0;
    for (let name in this.basket) {
      countBasket += this.basket[name] * productCatalog.returnPrice(name);
    }
    return countBasket;
  },
};
productBusket.addToBasket("apple", 3);
productBusket.addToBasket("banana", 1);

/*console.log(productBusket);
console.log(productBusket.countBasketPrice());*/
