import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if ( !Array.isArray(arr) ) {

    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let _arr = [];

   for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {

      case "--discard-next" :

        if (i + 2 <= arr.length - 1) {

          _arr.push('00');
          i += 2;
        }
        
      break;

      case "--discard-prev" : 

        _arr.pop();
      break;

      case "--double-next" :

        if (arr[i + 1] != undefined) {

          _arr.push(arr[i + 1]);
          _arr.push(arr[i + 1]);

          i += 1;
        }
       
      break;

      case "--double-prev" :

        if (arr[i - 2] != "--double-next") {
          _arr.push(arr[i - 1]);
          _arr.push(arr[i - 1]);
        } else {
          _arr.push(arr[i - 1]);
        }
       
      break;

      default:
        _arr.push(arr[i]);
    }

  }

  let newArr = _arr.filter(function(el) {

    if (el == "00" || el == undefined) {
      return false;
    }

    return true;
  });

  return newArr;
}
