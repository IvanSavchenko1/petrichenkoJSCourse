// мой вариант

function factorial(data) {
  //let fact = 0
  if (data === 1) {
    return 1
  } else {
    fact =  data * factorial(data-1)
  }
  return fact
}
console.log(factorial(5))


// по решению в задании с проверкой

function factorial2(n) {
  if (typeof(n) !== 'number' || !Number.isInteger(n)) {
    return "Ошибка, проверьте данные";
  }

  if (n === 1) {
    return 1
  } else {
    return n * factorial2(n-1)
  }

}

console.log(factorial2(5))