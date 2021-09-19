import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  constructor(machineType = true) {

    this.machineType = machineType;

    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  }

  encrypt(message = null, key = null) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (message === null || key === null) {

      throw new Error("Incorrect arguments!");

    }

    let arr = [];

    for (let i = 0, j = 0; i < message.length; i++) {

      if ( this.alphabet.indexOf( message[i].toUpperCase() ) == -1 ) {

        arr.push( message[i].toUpperCase() );

      } else {

        let _index = this.alphabet.indexOf( key[j % key.length].toUpperCase() );

        let index = ( this.alphabet.indexOf( message[i].toUpperCase() ) + _index + this.alphabet.length ) % this.alphabet.length;

        let str = this.alphabet[index];

        arr.push(str);

        j += 1;
      }

    }

    if (this.machineType) {

      return arr.join('');

    } else {

      return arr.reverse().join('');

    }
    

  }

  decrypt(encryptedMessage = null, key = null) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (encryptedMessage === null || key === null) {

      throw new Error("Incorrect arguments!");

    }

    let arr = [];

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {

      if ( this.alphabet.indexOf( encryptedMessage[i].toUpperCase() ) == -1 ) {

        arr.push( encryptedMessage[i].toUpperCase() );

      } else {

        let _index = this.alphabet.indexOf( key[j % key.length].toUpperCase() );

        let index = ( this.alphabet.indexOf( encryptedMessage[i].toUpperCase() ) + -(_index) + this.alphabet.length ) % this.alphabet.length;

        let str = this.alphabet[index];

        arr.push(str);

        j += 1;
      }

    }

    if (this.machineType) {

      return arr.join('');

    } else {

      return arr.reverse().join('');

    }

  }
}
