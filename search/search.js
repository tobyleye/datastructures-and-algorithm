function binary_search(src,search_value){
  console.log(`searching ${search_value} in ${src}`)
  if (search_value > src[0] && search_value < src[src.length-1]) {
    let middleIndex = Math.ceil((src.length-1) / 2)
    let middleElement = src[middleIndex]
  if (middleElement === search_value) {
    return middleIndex
  }

  if(middleElement < search_value){
    return binary_search(src.slice(middleIndex, src.length),search_value)
  }

  if (middleElement > search_value){
    return binary_search(src.slice(0, middleIndex), search_value)
  }
  }

  return null
}

let arr = [1, 4, 99, 111, 150, 999]


console.log('linear search')
console.log(linear_search(arr,5))

console.log('binary search')
console.log(binary_search(arr, 150))
