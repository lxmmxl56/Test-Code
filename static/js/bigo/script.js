'use strict';

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Sum -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(sum(0));
console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Pair Sum -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(pairSum(0));
console.log(pairSum(1));
console.log(pairSum(2));
console.log(pairSum(3));
console.log(pairSum(4));
console.log(pairSum(5));

function sum(n) {
    if (n <= 0) {
        return 0;
    }
    return(n + sum(n - 1));
}

function pairSum(n) {
    sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = pairSumRec(sum, i);
    }
    return sum;
}

function pairSumRec(a, b) {
    return a + b;
}
