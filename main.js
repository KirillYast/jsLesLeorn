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
function chessboard(element) {
  let table = document.createElement("table"),
    trTop = document.createElement("tr"),
    trBottom = document.createElement("tr"),
    arrNumber = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""],
    flag = true;

  function trTopBottom(tr, directBorder) {
    for (let i = 0; i < 10; i++) {
      let td = document.createElement("td");
      if (i == 0 || i == 9) td.style.cssText = "height: 50px; width: 50px;";
      else
        td.style.cssText = `height: 50px; width: 50px; ${directBorder}:1px solid black;`;
      td.textContent = arrNumber[i];

      tr.appendChild(td);
    }
  }

  trTopBottom(trTop, "border-bottom");
  trTopBottom(trBottom, "border-top");

  table.setAttribute("cellspacing", 0);
  table.appendChild(trTop);

  for (let i = 0; i < 8; i++) {
    let tr = document.createElement("tr"),
      tdLeft = document.createElement("td"),
      tdRight = document.createElement("td");

    tdLeft.style.cssText =
      "height: 50px; width: 50px; text-align: center; border-right: 1px solid black;";
    tdLeft.textContent = 8 - i;

    tdRight.style.cssText =
      "height: 50px; width: 50px; text-align: center; border-left: 1px solid black;";
    tdRight.textContent = 8 - i;

    tr.appendChild(tdLeft);

    for (let j = 0; j < 8; j++) {
      let td = document.createElement("td");
      td.style.cssText = "height: 50px; width: 50px;";
      if ((flag = !flag)) td.style.backgroundColor = "black";

      tr.appendChild(td);
    }

    tr.appendChild(tdRight);
    table.appendChild(tr);
    flag = !flag;
  }

  table.appendChild(trBottom);
  return element.appendChild(table);
}
//chessboard(document.querySelector("body"));

//lesson 5
let productCatalog = {
  Product: function (name, price) {
    this.name = name;
    this.price = price;
  },
  products: [{ name: "apple", price: 5 }],
  addProduct(name, price) {
    this.products.push(new this.Product(name, price));
  },
  getPrice(name) {
    return this.products.find((item) => item.name == name).price;
  },
  elementHtml(element) {
    let productCard = document.createElement("div"),
      productName = document.createElement("p"),
      productPrice = document.createElement("span"),
      productButton = document.createElement("button");

    productCard.style.cssText =
      "max-width: 300px; min-width:150px; text-align: center;  background-color: burlywood; margin: 0 0 20px 0; padding: 10px 0 10px 0;";
    productName.style.cssText =
      " font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 20px; margin: 0 0 10px 0;";
    productPrice.style.cssText = "display: block; margin: 0 0 10px 0;";
    productButton.style.cssText = "min-width: 100px; max-width: 150px;";

    productName.textContent = element.name;
    productPrice.textContent = "Price: " + element.price;
    productButton.textContent = "Buy";

    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productButton);

    return productCard;
  },
  outCatalogHtml(parentElement) {
    for (let element of this.products) {
      parentElement.appendChild(this.elementHtml(element));
    }
    return true;
  },
};
productCatalog.addProduct("banana", 12);
productCatalog.addProduct("tomat", 7);

//
let productBasket = {
  basket: {},
  countPrice: 0,
  countProduct: 0,
  addToBasket(name, count) {
    this.basket[name] = count;
    this.countPrice += productCatalog.getPrice(name) * count;
    this.countProduct += count;
  },
  elementHtml(name) {
    let card = document.createElement("div"),
      cardName = document.createElement("span"),
      cardPrice = document.createElement("span"),
      cardCount = document.createElement("span");

    card.style.cssText =
      " background-color: burlywood; padding: 10px; margin: 0 0 10px 0; display: flex; flex-wrap: nowrap;";
    cardName.style.cssText = "display: block; margin-right: 20px";
    cardName.classList.add("text__title");
    cardPrice.style.cssText = "display: block; margin-right: 20px";
    cardCount.style.cssText = "display: block;";

    cardName.textContent = name;
    cardPrice.textContent = productCatalog.getPrice(name);
    cardPrice.textContent = this.basket[name] + "шт.";

    card.appendChild(cardName);
    card.appendChild(cardPrice);
    card.appendChild(cardCount);

    return card;
  },
  outBasketHtml(parentElement) {
    let basketCard = document.createElement("div"),
      basketCardCount = document.createElement("p");

    basketCard.style.cssText =
      "max-width: 400px; text-align: center;  background-color: aqua; padding: 10px;";
    basketCardCount.style.cssText =
      "background-color: burlywood; margin: 0; padding: 10px;";

    if (this.countProduct) {
      for (let name in this.basket) {
        basketCard.appendChild(productBasket.elementHtml(name));
      }
      basketCardCount.textContent = `Товаров в корзине: ${this.countProduct}. На сумму: ${this.countPrice}`;
    } else basketCardCount.textContent = "В корзине нет товаров";

    basketCard.appendChild(basketCardCount);
    parentElement.appendChild(basketCard);
    return true;
  },
};
productBasket.addToBasket("apple", 3);
productBasket.addToBasket("banana", 1);

console.log(productBasket);
console.log(productBasket.basket);

let catalog = document.querySelector(".catalog"),
  basket = document.querySelector(".basket");

productCatalog.outCatalogHtml(catalog);
productBasket.outBasketHtml(basket);
