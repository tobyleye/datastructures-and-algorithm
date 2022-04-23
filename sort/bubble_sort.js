function bubble_sort(array) {
  console.log('input:',array)
  while (true) {
    sorted =true 
    for (let i=0; i<array.length-1; i++) {
      let current = array[i]
      let next = array[i+1]
      if (current > next) {
        array[i+1] = current;
        array[i] = next;
        sorted =false 
    }
  }
    if(sorted){
      break
    }
}
console.log('output:',array)
return array;
}


bubble_sort([
  99, 1, 22, 3, 54, 88, 10, 33
])





