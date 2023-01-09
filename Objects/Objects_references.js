"use strict"
//
// const obj = {
//   a: 5,
//   b: 1
// };
//
// const copy = obj; // тут передается значение по ссылке, передается ссылка - кладется ссылка на обьект
//
// copy.a = 10;
//
// console.log(copy)
// console.log(obj)

// если работаем с примитивными типами данных, то передаются они по значению
// а с обьектами - по ссылке

function copyFunc (mainObj) {
  let objCopy = {
  }
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key]
  }
  return objCopy
}

const numbers = {
  a: 2,
  b: 5 ,
  c: {
    x: 7,
    y: 4
  }
}

const newNumbers = copyFunc(numbers)

// newNumbers.a = 10;
// newNumbers.c.x = 10; // меняем в обоих

// console.log(newNumbers);
// console.log(numbers); // вложенный  c измениться в обоих обьектах, а "а" - нет все из-за того, что была созданна поверхностная копия функцией, а для "с" осталась ссылкой


const add = {
  d: 17,
  e: 20
}

//console.log(Object.assign(numbers, add))
const clone = Object.assign({}, add)
clone.d = 20
console.log(add)
console.log(clone)

const oldArray = ['a', 'b', 'c']
const newArray = oldArray.slice()

newArray[1] = 'ababa'
console.log(oldArray)
console.log(newArray)


// оператор spread ...

const video = ['youtube', 'vimeo', 'hub'],
      blogs = ['wordpress', 'livejournal', 'bloh'],
      internet = [...video, ...blogs, 'twitter', 'facebook']

console.log(internet)


function log(a, b, c) {
  console.log(a),
  console.log(b),
  console.log(c)
}
const num = [2, 5, 7, 9];
log(...num);


const array = ["a", "b"];
const veryNewArray = [...array]
console.log(veryNewArray)


const q = {
  one: 1,
  two: 2
};

const newQ = {...q}
console.log(newQ)