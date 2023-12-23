const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next duplicates the next element of the array in the transformed array.
// --double-prev duplicates the previous element of the array in the transformed array.

//If there is no element next to the control sequence to which it can be applied in the initial array, 
//or this element was previously deleted, it does nothing. 
let isArray = Array.isArray(arr);
if (!isArray) {
  throw new Error("'arr' parameter must be an instance of the Array!");
} else {
const cloneArr = [...arr];


if (cloneArr[0] === '--discard-prev') {
    cloneArr[0] = undefined;
 }
if (cloneArr[cloneArr.length - 1] === '--discard-next') {
    cloneArr[cloneArr.length - 1] = undefined;
 }

 for (let i = 0; i < cloneArr.length; i++) {
  if (cloneArr.includes('--discard-next') && cloneArr.includes('--discard-prev')) {
      if (cloneArr[i] === '--discard-next') {
     cloneArr.splice(i++, 3);
    }
    if (cloneArr[i] === '--discard-prev') {
     cloneArr.splice(i, 1);
    }
  }
  }

  for (let i = 0; i < cloneArr.length; i++) {
    if (cloneArr.includes('--discard-next') && cloneArr.includes('--double-prev')) {
        if (cloneArr[i] === '--discard-next') {
       cloneArr.splice(i++, 3);
      }
      if (cloneArr[i] === '--discard-prev') {
       cloneArr.splice(i, 1);
      }
    }
    }

    for (let i = 0; i < cloneArr.length; i++) {
      if (cloneArr.includes('--double-next') && cloneArr.includes('--discard-prev')) {
          if (cloneArr[i] === '--double-next') {
         cloneArr.splice(i++, 1);
        }
        if (cloneArr[i] === '--discard-prev') {
         cloneArr.splice(i, 1);
        }
      }
      }



for (let i = 0; i < cloneArr.length; i++) {
  // console.log(cloneArr[i]);
  
  if (cloneArr[i] === '--discard-next') {
   cloneArr.splice(i++, 1);
  }
  if (cloneArr[i] === '--discard-prev') {
   cloneArr.splice(i--, 1);
  }
  if (cloneArr[i] === '--double-next') {
   cloneArr[i++] = cloneArr[i];
  }
   if (cloneArr[i] === '--double-prev') {
   cloneArr[i--] = cloneArr[i];
  }
}

let result = cloneArr.filter(e => e !== undefined);
return result;
}

}

module.exports = {
  transform
};
