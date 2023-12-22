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
//The str and addition parameters are strings by default. 
//In case when type of these parameters is different, 
//they must be converted to a string.
//separator and additionSeparator parameters are strings.

  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let addition = options.addition !== undefined ? options.addition : '';

  let additionTotalinOneGo = '';

  for (let i = 1; i < additionRepeatTimes; i++) {
  additionTotalinOneGo = additionTotalinOneGo + addition + additionSeparator;
};
  additionTotalinOneGo = additionTotalinOneGo + addition; //чтобы последняя адишн была без additionSeparator
// console.log(additionTotalinOneGo)

  let result = '';
  for (let j = 1; j < repeatTimes; j++) {
  result = result + str + additionTotalinOneGo + separator;
  }
  result = result + str + additionTotalinOneGo; ////чтобы последняя адишн была без separator
  return result;
  }

module.exports = {
  repeater
};
