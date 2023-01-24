const soldier = {
  health: 400,
  armor: 100,
  sayHello: function ()  {
    console.log("Hello");
  }
}

// const john = {
//   health: 100
// }
// Но это устаревший проект и его не рекомендуют использовать
//john.__proto__ = soldier;

// console.log(john.armor)
// john.sayHello()

// Object.setPrototypeOf(john, soldier) // идентично john.__proto__ = soldier;


// cоздаем обьект, уже будет прототипом от солдата

const john = Object.create(soldier)
console.log(john.armor)
john.sayHello()