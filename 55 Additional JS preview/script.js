'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box')
boxesQuery[0].remove() // тут вызов статичной коллекции, которая была вначале
boxesGet[0].remove() // а тут уже после изменений, поэтому в итоге будет только один элемент
console.log(boxesQuery);
console.log(boxesGet);

console.log(Array.from(boxesGet));