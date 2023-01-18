const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const family1 = [];

function showFamily(arr) {
  let str;
  let arrstring;
  str = arr.join(' ')
  if (arr.length > 0) {
    arrstring = `Семья состоит из: ${str}`;
  } else {
    //console.log('Семья пуста')
    arrstring = 'Семья пуста'
  }
  return arrstring
}

console.log(showFamily(family))


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach(function (item){
    let newItem = item.toLowerCase()
    console.log(newItem)
    }
  )
}
standardizeStrings(favoriteCities)