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

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Recurseive Calls (2^N) -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('0:', myBigO.twoN(0));
console.log('1:', myBigO.twoN(1));
console.log('2:', myBigO.twoN(2));
console.log('3:', myBigO.twoN(3));
console.log('4:', myBigO.twoN(4));
