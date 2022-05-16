'use strict';

const Tech = require('./static/js/crack/tech.js');

const myTech = new Tech();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- String Permutations -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('1:', myTech.allPermut('a'));
console.log('2:', myTech.allPermut('ab'));
console.log('3:', myTech.allPermut('abc'));