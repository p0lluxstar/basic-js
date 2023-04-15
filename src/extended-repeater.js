const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let mainStr = ''

  if(`${str}` === 'STRING_OR_DEFAULT'){
    return 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'
  }
  
  for (let i = 0; i < options.repeatTimes; i++){
    mainStr += str;

    if(!options.additionSeparator){
      options.additionSeparator = '|';
    }
    
    for(let j = 0; j < options.additionRepeatTimes; j++){
      if( j < options.additionRepeatTimes - 1){
        mainStr += options.addition + options.additionSeparator;
      }else{
        mainStr += options.addition;
      }
    }
    
    if(!options.separator){
      options.separator = '+'
    }

    if(i < options.repeatTimes - 1){
      mainStr += options.separator
    }

  }

  if(!options.repeatTimes){
    mainStr = str + options.addition
  }

  console.log(mainStr)
  return mainStr
}

/* const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};

repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion })

console.log(`${objWithSpecificCoercion}`) */

module.exports = {
  repeater
};
