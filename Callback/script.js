function learnJS (lang, callback) {
  console.log(`I learn ${lang}`)
  callback()
}
learnJS('JavaScript', function (){
  console.log('I passed the lesson')
})

//второй вариант, где коллбек функция не описывается в самом вызове, а передается как аргумент без! скобок
function learnJS1 (lang, callback) {
  console.log(`I learn ${lang}`)
  callback()
}

function done(){
  console.log('I passed the lesson')
}
learnJS1('JavaScript', done)