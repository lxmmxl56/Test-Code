'use strict';

const BigO = require('./static/js/crack/bigo.js');

const myBigO = new BigO();

console.log(myBigO.sum(1));

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
