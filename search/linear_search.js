 function linear_search(src, search_value) {
     steps= 0;
     for (let i=0; i<src.length; i++) {
       steps++
       console.log(`searching ${steps}/${src.length}`)
       let item = src[i]
       if (item === search_value) {
         return i
       }
      if (item > search_value) {
        return null
      }
    }
    return null
  }


linear_search([
  3,4,5,62,1,'apple'],
  'mango'
])
