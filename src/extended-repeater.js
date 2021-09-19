import { NotImplementedError } from '../extensions/index.js';

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
 * repeater('STRING', { repeatTimes: 3, 
 *                      separator: '**', 
 *                      addition: 'PLUS', 
 *                      additionRepeatTimes: 3, 
 *                      additionSeparator: '00'
 *                     }
 *          )
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (typeof str != "string") {

    str = String(str);

  }

  if ( !options.hasOwnProperty('repeatTimes') ) {

    options.repeatTimes = 1;

  }

  if ( !options.hasOwnProperty('separator') ) {

    options.separator = '+';

  }

  if ( !options.hasOwnProperty('addition') ) {

    options.addition = '';

  } else {

    options.addition = String(options.addition);

  }

  if ( !options.hasOwnProperty('additionRepeatTimes') ) {

    options.additionRepeatTimes = 1;

  }

  if ( !options.hasOwnProperty('additionSeparator') ) {

    options.additionSeparator = '|';

  }

  let arr = [];

  let _arr = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {

    arr.push(options.addition);

  }

  arr = arr.join(options.additionSeparator)

  for (let i = 0; i < options.repeatTimes; i++) {

    _arr.push(str + arr);

  }

  _arr = _arr.join(options.separator);

  return _arr;

}
