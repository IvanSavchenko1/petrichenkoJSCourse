const options = {
  name: 'test',
  width: 1024,
  height: 800,
  colors: {
    border: 'black',
    bg: 'red'
  }
}
// console.log(options["colors"]["bg"])

let counter = 0;
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
    }
  } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`)
    counter ++
    }
}
console.log(counter)


// встроенный метод перебора обьектов

console.log(Object.keys(options).length)

// Деструктуризация

const {border, bg} = options.colors;
console.log(bg)