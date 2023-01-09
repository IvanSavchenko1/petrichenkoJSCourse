const options = {
  name: 'test',
  width: 1024,
  height: 800,
  colors: {
    border: 'black',
    bg: 'red'
  }
}
//console.log(options["colors"]["bg"])

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
console.log(border)
console.log()


//
// let string = '&subPartnerId=&isIframe=false&configId=12310293801928&x_auth_token=kj129asdmz92akskjd&lobby_url=some'
// x_auth_tokenStart = string.search(/x_auth_token/)+13
// let x_auth_token = string.slice(x_auth_tokenStart, x_auth_tokenStart+36)
// console.log(x_auth_token)