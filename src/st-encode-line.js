import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = str + ' ';
  let first = str[0];
  let newStr = '';
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    
    if (str[i] == first[first.length - 1]) {

      count += 1;
    } else {

      newStr += count + str[i - 1];

      first = newStr + str[i];

      count = 1;
    }

  }

  newStr = newStr.replace(new RegExp('1','g'), '' );

  return newStr;
}
