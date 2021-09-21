import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (domains.length == 0) return {}

  let fullDomains = domains.join('.');

  fullDomains = fullDomains.split('.');

  fullDomains = [...new Set(fullDomains)];

  fullDomains.sort(function(a, b) {

    return a.length - b.length;
  })

  let obj = {};

  let revDom = domains.map(el => {

    let spl = el.split('.');

    spl = spl.reverse();

    spl = spl.join('.');

    return '.' + spl;
  })

  revDom = revDom.reverse();

  let fullArr = [...revDom];

  fullArr.unshift('.' + fullDomains[0]);

  for (let i = 0; i < fullArr.length; i++) {

    let total = 0;

    revDom.forEach(el => {

      if ( el.includes(fullArr[i]) ) {

        total += 1;

      }

    });
    
    obj[fullArr[i]] = total;

  }
  
  return obj;

}
