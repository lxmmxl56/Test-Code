'use strict';

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Sum -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(sum(0));
console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('- Pair Sum -');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(pairSum(0));
console.log(pairSum(1));
console.log(pairSum(2));
console.log(pairSum(3));
console.log(pairSum(4));

function sum(n) {
    if (n <= 0) {
        return 0;
    }
    return(n + sum(n - 1));
}

function pairSum(n) {
    sum = 0;
    for (let i = 1; i < n; i++) {
        sum += pairSumRec(i, i + 1);
    }
    return sum;
}

function pairSumRec(a, b) {
    return a + b;
}
