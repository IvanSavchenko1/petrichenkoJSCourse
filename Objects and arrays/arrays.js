"use strict"

let arr = [2, 6, 8, 12, 23, 1, 7]

//arr.pop()
//arr.push(99)

for (let i=0; i <arr.length; i++) {
  console.log(arr[i])
}

// используется с массивоподобными обьетами
// for (let value of arr) {
//   console.log(value)
// }

arr.forEach(function(item,i,arr){
  console.log(`${i}: ${item} внутри массива ${arr}`);
})

arr.forEach(function(item){
  console.log(item);
})


// arr.split
//arr join методы
// console.log(arr.join(''))


// sort выполняет сортировку как строку, поэтому резщультат для чисел будет невенрным
console.log(arr.sort())


arr.sort(compareNumber)
function compareNumber(a, b) {
  return a - b
}
console.log(arr)





