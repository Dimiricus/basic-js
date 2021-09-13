import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {

  constructor() { } 

  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (Array.isArray(arr) && arr.length != 0) { 

      return 1 + Math.max(...arr.map(t => this.calculateDepth(t)))

    } else if (Array.isArray(arr) && arr.length == 0) {

      return 1;
      
    } else {
      
      return 0;

    }

  }

}
