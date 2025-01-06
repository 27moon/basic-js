const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let copy = matrix;

  for (let i = 0; i < matrix.length; i++) {
 
    for (let j = 1; j < copy.length; j++) {
      
        if (matrix[i].length === 1) {
        let flatArr = copy.flat();
        return flatArr.splice(0, flatArr.length - 1).reduce((a, b) => a + b);

        } else {
      
      
      if (matrix[i][j] === 0) {
        copy[j] = 0;
      }
    }
  }
  }
  let finalArr = copy.flat()
return finalArr.reduce((a, b) => a + b);
}

module.exports = {
  getMatrixElementsSum
};
