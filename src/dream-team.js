import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (typeof members != 'object' || members === null || members.length == undefined) {

    return false;

  } else {

    let arr = [];

    members.forEach(function(el) {

      if ( typeof(el) == 'string' && el.length != 0 && el != ' ' ) {

        let element = el.trim();

        element = String(element)[0].toUpperCase();

        if ( element.charCodeAt() >= 65 && element.charCodeAt() <= 90 ) {

          arr.push( element );

        }
        
      }

    });

    arr.sort(function(a,b) {
      return a.charCodeAt() - b.charCodeAt();
    });

    return arr.join('');

  }

}
