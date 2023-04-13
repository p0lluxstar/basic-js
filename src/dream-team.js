const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arrName) {
  let newArr = [];
  let res = '';

  if (Array.isArray(arrName)){
    for(let i = 0, j = 0; i < arrName.length; i++){
      if (typeof arrName[i] === 'string'){
       newArr[j] = arrName[i].trim()[0].toUpperCase();
       j++
      }
    }
  
    newArr.sort()
  
    for(let letter of newArr){
      res += letter
    }
  
    return res 
  } 

  return false

}


module.exports = {
  createDreamTeam
};
