const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

let arr1 = [];
let arr2 = [];
let arr3 = [];

for (let i = 0; i < s1.length; i++){
  arr1[i] = s1[i]
}

for (let i = 0; i < s2.length; i++){
  arr2[i] = s2[i]
}

count = 0;

arr1.forEach((el, index) =>{
  for(let i = 0; i < arr2.length; i++){
    if(el === arr2[i]){
      arr3[count] = el;
      arr2.splice(i, 1)
      i += arr1.length
      count++;
    }
  }
})

if(arr3.length > arr1.length){
  return arr1.length
}

return arr3.length

}

module.exports = {
  getCommonCharacterCount
};
