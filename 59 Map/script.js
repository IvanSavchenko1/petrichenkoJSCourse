'use strict';

const shops = [
  {rice: 500},
  {oil: 200},
  {bread: 50}
];

const map = new Map([
  [{paper: 400}, 8000]
]);

// map.set(shops[0], 5000)
// // мы задаем значение обьекту  rice
//
// // и теперь ключ {rice: 500}, а значение 5000 - лучше видно в консоли браузера
// map.set(shops[1], 15000)
//    .set(shops[2], 2200)

// console.log(map)

// или делаем в цикле
const budget = [ 10000, 20000, 30000];
shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
})
console.log(map)

console.log(map.get(shops[0]));

//map.keys()

// for (let shop of map.keys()) {
//   console.log(shop)
// }

const goods = [];
for (let shop of map.keys()) { // сначала карта в масив с обьектами
  goods.push(Object.keys(shop)[0]) //Object.keys(shop) делаем массив свойств, 0 из-за того что названия в паре на первом месте (keys)
}
console.log(goods)

//тоже самое с values
for (let price of map.values()) {
  console.log(price);
}

// for (let price of map.entries()) { // тут хз
//   console.log(map);
// }