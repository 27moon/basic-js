const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //If the date argument was not passed, the function must return the string 'Unable to determine the time of year!'. 
  //If the date argument is invalid, the function must throw an Error with message Invalid date!.

  if (date === undefined){
    return 'Unable to determine the time of year!'
  }
  if ((date instanceof Date === false)){ //whether the object is created from the Date constructor
    throw new Error("Invalid date!")}
  if ( Object.keys(date).length !== 0) {
    throw Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  }
  if (month === 2 || month === 3 || month === 4) {
    return 'spring';
  }
  if (month === 5 || month === 6 || month === 7) {
    return 'summer';
  }
  if (month === 8 || month === 9 || month === 10) {
    return 'autumn';
  }

}


module.exports = {
  getSeason
};
