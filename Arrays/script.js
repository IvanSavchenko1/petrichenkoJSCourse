"use strict"

// const arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.push(10)


// console.log(arr)
//
// // console.log(arr.length)
//
// for (let i=0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//
// // метод for of - для масивоподобных сущностей, тут можно использовать break и continue
// for (let value of arr) {
//   console.log(value)
// }

//
// const forEachArray = [2,3,4,5,6,7]
//
// forEachArray.forEach(function (item, i, forEachArray){
//   console.log(`${i}: ${item} внутри ${forEachArray}`)
// })

// метод sort - воспринимает все как строки, но принимает аргумент правила
// поэтому
// const arr = [1, 21, 13, 23, 5, 19];
// arr.sort() - выдаст сортировку по первым цифрам


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(';'))


const arr = [1, 21, 13, 23, 5, 19];
arr.sort(compareNum);
console.log(arr)

// внутри метода сорт есть алгоритм, в уроке ссылка на док о нем
function compareNum (a,b) {
  return a - b
}