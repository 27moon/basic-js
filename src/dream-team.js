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
function createDreamTeam(members) {

  let isArray = Array.isArray(members);

  if(isArray) {

      let stringsOnly = members.filter(item => typeof item === 'string')
      .map(el => el.trim())
      .map(el => el[0].toUpperCase())
    let sortedArr = stringsOnly.sort().join('');
    return sortedArr;
  
    } else {
      return false;
    }
  }

module.exports = {
  createDreamTeam
};
