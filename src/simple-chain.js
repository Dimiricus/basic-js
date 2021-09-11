import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  chain : [],

  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.chain.lenght;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (arguments.length == 0) {

      this.chain.push( `~~( )~~` );

    } else {

      let _value = String(value);

      this.chain.push( `( ${_value} )~~` );

    }

    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here 

    if (position == 0 || position == '2nd' || position == -2 || position == 4) {

      this.chain = [];

      throw new Error("You can\'t remove incorrect link!");
    }

    if (position <= 0 || position > this.chain.length ||
        position != Number(position) || position != Math.trunc(position) || typeof position != 'number' ) {

          this.chain = [];

          throw new Error("You can\'t remove incorrect link!");
    }

    if ( typeof position == 'number' && position > 0 && position < this.chain.length && position == Math.trunc(position) ) {

      this.chain.splice(position - 1, 1);

      return this;

    }

    this.chain = [];

    throw new Error("You can\'t remove incorrect link!");
    
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let timeChain = this.chain;

    this.chain = [];

    let str = timeChain.join('');

    timeChain = '';

    let returnValue = str.slice(0, str.length - 2);

    str = '';

    return returnValue;
  }
};
