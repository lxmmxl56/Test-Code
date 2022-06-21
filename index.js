'use strict';

const Tech = require('./static/js/crack/tech.js');

const myTech = new Tech();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- String Permutations -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('0:', myTech.permute(''));
console.log('1:', myTech.permute('a'));
console.log('2:', myTech.permute('ab'));
console.log('3:', myTech.permute('abc'));
console.log('4:', myTech.permute('abcd'));
console.log('5:', myTech.permute('abcde'));
