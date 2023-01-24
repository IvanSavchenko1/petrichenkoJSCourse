const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5
    },
    {
      width: 15,
      length: 7
    },
    {
      width: 20,
      length: 5
    },
    {
      width: 8,
      length: 10
    }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let conclusion
  let totalSquare = 0
  data.shops.forEach(function(item) {
    let square = item.width * item.length
    totalSquare += square
  })
  console.dir(totalSquare*data.height*data.moneyPer1m3)
  if (data.budget >= totalSquare*data.height*data.moneyPer1m3) {
    conclusion = 'Бюджета достаточно'
  } else {
    conclusion = 'Бюджета недостаточно'
  }
  console.log(totalSquare)
  console.log(conclusion)
return conclusion

}


isBudgetEnough(shoppingMallData)