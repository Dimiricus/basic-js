import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // spring, summer, autumn (fall), winter

  if (arguments.length == 0) {
    return 'Unable to determine the time of year!';
  }

  try {

    date.getTime();

  } catch {

    throw new Error("Invalid date!");

  }


    let seasons = ["winter", "spring", "summer", "autumn"];

    let month = date.getMonth();

    if (month == 11 || month <= 1) {
      return seasons[0];
    }

    if (month >= 2 && month <= 4) {
      return seasons[1];
    }

    if (month >= 5 && month <= 7) {
      return seasons[2];
    }

    if (month >= 8 && month <= 10) {
      return seasons[3];
    }

}
