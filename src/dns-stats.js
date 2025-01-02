const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};      
  let c = [];
  domains.forEach((el) => {
    let arr = el.split('.').reverse();
    let x = '';
   
  arr.forEach((el) => {
        x += `.${el}`;
        c.push(x);
  //[".ru",".ru.yandex",".ru.yandex.code",".ru",".ru.yandex",".ru.yandex.music",".ru",".ru.yandex"] = c array;
   })
   })
  c.map((el) => {
    obj[el] ? obj[el]++ : obj[el] = 1;
  })
  return obj;
}

module.exports = {
  getDNSStats
};
