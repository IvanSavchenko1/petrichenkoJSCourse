'use strict'
/* 1 пример
let number = 5; debugger

function logNumber() {
  let number = 4; debugger
  console.log(number);
}

number = 6;

logNumber(); debugger
// замыкание - это когда функ пытается найти что-то внутри себя и если не находит, обращается к глобальному
// environment record!
// любое лексич окружение технически - обьект, а переменные свойства этого обьекта
// каждый вызов функции создает свое лексическое окружение

 */


function createCounter() {
  let counter = 0;

  const myFunction = function() { debugger
    counter = counter + 1; debugger
    return counter;debugger
  }
  return myFunction;
}
debugger
const increment = createCounter();debugger
const c1 = increment(); debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3)

// пример из собеседований
/*
for (let i =0; i < 9; i++ ) {
  for (let j = 0; j <9; j++) {
    let num = 3;
  }
  console.log(num) // почему нельзя обратиться к num - потому что num существует только внутри своих фигурных скобок
  // там свое лекс окружение, поэтому будет ошибка
}

 */