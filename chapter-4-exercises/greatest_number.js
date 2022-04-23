function greatestNumber(array) {
  let greatestnum = array[0]
  for (let item of array){
    if (item > greatestnum) {
      greatestnum = item
    }
  }
  return greatestnum;
}

function greatestProduct(array){
  let greatestnum = array[0] 
  let secondgreatest = array[1]
  for (let item of array) {
    if (item > greatestnum && item > secondgreatest) {
       secondgreatest = greatestnum
      greatestnum= item
    } else if (item > secondgreatest) {
      secondgreatest = item
    } else if (item > greatestnum){
      greatestnum = item
    }
  }

  greatestnum = greatestnum ?? 1
  secondgreatest = secondgreatest ?? 1
  return greatestnum * secondgreatest
}


// console.log(greatestNumber([3,45,100,245,21]))
console.log(
  greatestProduct([4,12,99,45,99,20,20, 150, 10000])
)

console.log(
  greatestProduct([-5, -2, -10, 3])
)

