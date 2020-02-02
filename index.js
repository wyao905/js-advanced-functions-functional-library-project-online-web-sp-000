const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collect, callBack) {
      for(let i in collect) {
        callBack(collect[i])
      }
      return collect
    },

    map: function(collection, callBack) {
      let r = []
      for(let i in collection) {
        r.push(callBack(collection[i]))
      }
      return r
    },

    reduce: function(collection, callback, acc) {
      let i = 0
      if(acc === undefined) {
        acc = collection[0]
        i = 1
      }
      for(; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },
    
    find: function(collection, predicate) {
      for(let i in collection) {
        if(predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },
    
    filter: function(collection, predicate) {
      let r = []
      for(let i in collection) {
        if(predicate(collection[i])) {
          r.push(collection[i])
        }
      }
      return r
    },
    
    size: function(collection) {
      return Object.keys(collection).length
    },
    
    first: function(array, n) {
      if(n === undefined) {
        return array[0]
      } else {
        return array.splice(0, n)
      }
    },
    
    last: function(array, n) {
      if(n === undefined) {
        return array[array.length - 1]
      } else {
        return array.slice(-n)
      }
    },
    
    compact: function(array) {
      let r = []
      for(let i in array) {
        if(!!array[i]) {
          r.push(array[i])
        }
      }
      return r
    },
    
    sortBy: function(array, callback) {
      let sorted = []
      for(let i in array) {
        sorted.push(array[i])
      }
      return sorted.sort((a, b) => callback(a) - callback(b))
    },
    
    flatten: function(array, shallow) {
      let l = array.length
      for(let i = 0; i < l; i++) {
        let a = array.splice(i, 1)
        if(Array.isArray(a)) {
          for(let j = 0; j < a.length; j++) {
            array.splice(i + j, 0, a[j])
          }
          if(Array.isArray(array[i])) {
            i--
          }
        } else{
          array.splice(i, 0, a)
        }
        
        l = array.length
      }
      
      return array
    },

    functions: function() {
    },
  }
})()

fi.libraryMethod()