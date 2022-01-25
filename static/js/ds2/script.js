'use strict';

import {bubbleSort} from './sort.js';


// const t0 = performance.now();
// for (let i = 0; i < 1000000; i++) { 
//     const sorted = bubbleSort(unsorted);
// }
// const t1 = performance.now();
// console.log(t1 - t0);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- SORTING -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~') 
let unsorted = [1, 3, 4, 7, 5, 4, 8];
console.log(unsorted);
const sorted = bubbleSort(unsorted);
console.log(sorted);