const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  if(arr[0] === '--discard-prev' || arr[0] === '--double-prev'){
    arr.splice(0, 1)

  }
  
  if(arr[arr.length-1] === '--double-next' || arr[arr.length-1] === '--discard-next'){
    arr.splice(arr.length-1)
  }

  console.log(arr)
  
  let newArr = [];

 for (let i = 0, j = 0; i < arr.length; i++){
  if (arr[i] === '--discard-next'){
    i++
  }else if(arr[i] === '--discard-prev'){
    newArr.splice(i-1)
    j--
  }else if (arr[i] === '--double-next'){
    newArr[j] = arr[i + 1] 
    j++ 
  }else if(arr[i] === '--double-prev'){
    newArr[j] = arr[i - 1] 
    j++
  }else {
    newArr[j] = arr[i];
    j++
  }
 }

 console.log(newArr)

 return newArr;

}

transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])

module.exports = {
  transform
};

/* let a =['--discard-prev', 1, 2, 3]
console.log(a.splice(0, 1))
console.log(a) */