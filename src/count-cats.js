const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arrDubble) {
 
  let newArr = [];
  let quantityCats = 0;

  if(arrDubble.length > 0) {
    for (let i = 0; i < arrDubble[0].length; i++){
      newArr = newArr.concat(arrDubble[i])
    }

    newArr.forEach(el => {
        if(el === '^^'){
          quantityCats++ 
        }  
      }
    )
  } 
  
  return quantityCats > 0 ? quantityCats : 0 ;

}

module.exports = {
  countCats
};
