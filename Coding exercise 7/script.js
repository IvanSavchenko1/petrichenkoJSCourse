// я делал

function calculateVolumeAndArea1(length) {
  if (typeof length === "number") {
    let volume = length * length * length
    let area = 6 * (length * length)

    console.log(`Обьем куба ${volume}, площадь всей поверхности: ${area}`)
  } else {
   return "При вычислении произошла ошибка"
  }
}
calculateVolumeAndArea1(2)


// пример https://github.com/yankovalenko94/JS_task_answers/blob/master/Tests/1_functions/functions_2.js


function calculateVolumeAndArea(length) {
  if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  }

  let volume = 0,
    area = 0;

  volume = length * length * length;
  // length ** 3 - это тоже самое, что и выше или варианты через цикл.
  // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
  area = 6 * (length * length);

  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5))

// задача 2 моя

function getCoupeNumberMy(place) {
  //let coupeNumber
  if (typeof (place) !== 'number' || place < 0 || !Number.isInteger(place)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (place === 0 || place > 36) {
    return "Таких мест в вагоне не существует"
  } else {
    //return coupeNumber = Math.floor(place / 4) + 1
    return Math.ceil(place/4)
  }
}

console.log(getCoupeNumberMy(11))