'use strict';

// set - набор данных, где нет повторений
const arr = [1, 1, 2, 2, 4, 5, 6, 5];
const set = new Set(arr);
console.log(set)


const arr1 = ["Alex", 'Anna', 'Alex', 'Oleg'];
const set1 = new Set(arr1);
console.log(set1)
set1.add('Ivan')
set1.add('Oleg')
console.log(set1);

//set1.delete('Oleg')
// console.log(set1);
// console.log(set1.has('Anna'));
// console.log(set1.size);
// //set1.clear();
//
console.log(set1)

// перебор set

//for (let value of set1) console.log(value)

// set1.forEach((value, valueAgain, set1)=> {
//   console.log(value, valueAgain)
// })

// у set нет ключей, така реализация для совместимости
// console.log(set1.values())
// console.log(set1.keys())
// console.log(set1.entries())

//функция которая принимает массив через сет,
// фильтрует от дубликатов и сохраняет в стандартный массив
function unique(array) {
  return Array.from(new Set(array));
}
console.log(unique(arr))