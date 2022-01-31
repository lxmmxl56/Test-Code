'use strict';

import {bubbleSort, insertSort, mergeSort, quickSort, binarySearch} from './sort.js';

let unsorted = [6, 4, 3, 7, 5, 4, 8];
let sorted = [];
let t0 = 0;
let t1 = 0;

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- BUBBLE -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(unsorted);
// t0 = performance.now();
// for (let i = 0; i < 1000000; i++) {
    sorted = bubbleSort(unsorted);
// }
// t1 = performance.now();
// console.log(t1 - t0);
console.log(sorted);

unsorted = [6, 4, 3, 7, 5, 4, 8];
sorted = [];

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- Insert -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(unsorted);
// t0 = performance.now();
// for (let i = 0; i < 1000000; i++) {
    sorted = insertSort(unsorted);
// }
// t1 = performance.now();
// console.log(t1 - t0);
console.log(sorted);

unsorted = [6, 4, 3, 7, 5, 4, 8];
sorted = [];

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- Merge -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(unsorted);
// t0 = performance.now();
// for (let i = 0; i < 1000000; i++) {
    sorted = mergeSort(unsorted);
// }
// t1 = performance.now();
// console.log(t1 - t0);
console.log(sorted);

unsorted = [6, 4, 3, 7, 5, 4, 8];
sorted = [];

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- Quick -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(unsorted);
// t0 = performance.now();
// for (let i = 0; i < 1000000; i++) {
    sorted = quickSort(unsorted);
// }
// t1 = performance.now();
// console.log(t1 - t0);
console.log(sorted);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('- Binary Search -')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(sorted);
console.log(binarySearch(sorted, 3));
console.log(binarySearch(sorted, 5));
console.log(binarySearch(sorted, 8));
console.log(binarySearch(sorted, 0));
