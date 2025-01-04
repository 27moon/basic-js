const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let splitArr = str.split('');
  let resultLine = '';
  
  splitArr.map((el, i) => {
    if(splitArr[i] === splitArr[i + 1]){
        count++;
    } else {
      resultLine += count + splitArr[i];
      count = 1;
    }
})
return resultLine.replaceAll('1', '');
}

module.exports = {
  encodeLine
};
