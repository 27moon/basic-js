const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString();
  let allPossibleNumbers = [];
  
  for (let i = 0; i < arr.length; i++) {
    let num = arr.slice(0, i) + arr.slice(i + 1);
    allPossibleNumbers.push(num);
  }
  let toNum = allPossibleNumbers.map(el => +el);
  let result = Math.max(...toNum);
  return result;
}

module.exports = {
  deleteDigit
};
