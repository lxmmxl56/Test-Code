'use strict';

const BigO = require('./static/js/crack/bigo.js');

const myBigO = new BigO();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Sum -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(myBigO.sum(0));
console.log(myBigO.sum(1));
console.log(myBigO.sum(2));
console.log(myBigO.sum(3));
console.log(myBigO.sum(4));
console.log(myBigO.sum(5));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Pair Sum -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(myBigO.pairSum(0));
console.log(myBigO.pairSum(1));
console.log(myBigO.pairSum(2));
console.log(myBigO.pairSum(3));
console.log(myBigO.pairSum(4));
console.log(myBigO.pairSum(5));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Print Pairs (N^2) -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(myBigO.printPairs('1'));
console.log(myBigO.printPairs('12'));
console.log(myBigO.printPairs('123'));
console.log(myBigO.printPairs('1234'));
console.log(myBigO.printPairs('12345'));
console.log(myBigO.printPairs('123456'));
console.log(myBigO.printPairs('1234567'));
console.log(myBigO.printPairs('12345678'));
console.log(myBigO.printPairs('123456789'));
console.log(myBigO.printPairs('1234567890'));
console.log(myBigO.halfMatrix('12345678901'));
console.log(myBigO.halfMatrix('123456789012'));
console.log(myBigO.halfMatrix('1234567890123'));
console.log(myBigO.halfMatrix('12345678901234'));
console.log(myBigO.halfMatrix('123456789012345'));
console.log(myBigO.halfMatrix('1234567890123456'));
console.log(myBigO.halfMatrix('12345678901234567'));
console.log(myBigO.halfMatrix('123456789012345678'));
console.log(myBigO.halfMatrix('1234567890123456789'));
console.log(myBigO.halfMatrix('12345678901234567890'));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Half Matrix (N^2)? -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(myBigO.halfMatrix('1'));
console.log(myBigO.halfMatrix('12'));
console.log(myBigO.halfMatrix('123'));
console.log(myBigO.halfMatrix('1234'));
console.log(myBigO.halfMatrix('12345'));
console.log(myBigO.halfMatrix('123456'));
console.log(myBigO.halfMatrix('1234567'));
console.log(myBigO.halfMatrix('12345678'));
console.log(myBigO.halfMatrix('123456789'));
console.log(myBigO.halfMatrix('1234567890'));
console.log(myBigO.halfMatrix('12345678901'));
console.log(myBigO.halfMatrix('123456789012'));
console.log(myBigO.halfMatrix('1234567890123'));
console.log(myBigO.halfMatrix('12345678901234'));
console.log(myBigO.halfMatrix('123456789012345'));
console.log(myBigO.halfMatrix('1234567890123456'));
console.log(myBigO.halfMatrix('12345678901234567'));
console.log(myBigO.halfMatrix('123456789012345678'));
console.log(myBigO.halfMatrix('1234567890123456789'));
console.log(myBigO.halfMatrix('12345678901234567890'));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Recurseive Calls (2^N) -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('0:', myBigO.twoN(0));
console.log('1:', myBigO.twoN(1));
console.log('2:', myBigO.twoN(2));
console.log('3:', myBigO.twoN(3));
console.log('4:', myBigO.twoN(4));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Product -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('0:', myBigO.product(2, 0));
console.log('1:', myBigO.product(4, 1));
console.log('2:', myBigO.product(8, 2));
console.log('3:', myBigO.product(16, 3));
console.log('4:', myBigO.product(32, 4));
console.log('5:', myBigO.product(64, 5));


console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Power -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('0:', myBigO.power(2, 0));
console.log('1:', myBigO.power(4, 1));
console.log('2:', myBigO.power(8, 2));
console.log('3:', myBigO.power(16, 3));
console.log('4:', myBigO.power(32, 4));
console.log('5:', myBigO.power(64, 5));
