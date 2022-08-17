'use strict';

const math = require('mathjs');

module.exports = class BigO {
  
  sum(n) {
    if (n <= 0) {
      return 0;
    }
    return(n + this.sum(n - 1));
  }

  pairSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = this.pairSumRec(sum, i);
    }
    return sum;
  }

  pairSumRec(a, b) {
    return a + b;
  }
  
  // this illustrates N^2
  printPairs(a) {
    const n = a.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        count++;
      }
    }
    return `Length: ${n}, Count: ${count}`
  }
  
  // this also illustrates N^2
  halfMatrix(a) {
    const n = a.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        count++;
      }
    }
    return `Length: ${n}, Count: ${count}`
  }

  // this illustrates 2^N - recursive
  twoN(n) {
    if (n < 1) {
      return 1;
    }
    return this.twoN(n - 1) + this.twoN(n - 1);
  }
  
  product(a, b) {
    let sum = 0;
    let count = 0; 
    for (let i = 0; i < b; i++) {
      sum += a;
      count++;
    }
    return [a,b,sum,count];
  }
  
  power(a, b, count=0) {
    count = count || 0;
    if (b < 0) {
      console.log('count: ', count);
      return [0, count];
    }
    if (0 === b) {
      return [1, count];
    }
    const res = this.power(a, b - 1, count + 1);
    return [a * res[0], res[1]];
//    return [a * this.power(a, b - 1, count + 1)[0], this.power(a, b - 1, count + 1)[1]];
  }

  mod(a, b) {
    if (b <= 0) {
      return -1;
    }
    let div = math.floor(a / b);
    return a - div * b;
  }

  div(a, b) {
    let count = 0;
    let sum = b;
    while (sum <= a) {
      sum += b;
      count++;
    }
    return count;
  }
  
  sqrt(n) {
    return this.sqrtr(n, 1, n);
  }
  
  sqrtr(n, min, max, count) {
    count = count || 1;
    if (max < min) {
      return [-1, count];
    }
    const guess = math.floor((min + max) / 2);
    const prod = guess * guess;
    if (n === prod) {
      return [guess, count];
    } else if (prod < n) {
      const res = this.sqrtr(n, guess + 1, max, count + 1);
      return [res[0], res[1]];
    } else {
      const res = this.sqrtr(n, min, guess - 1, count + 1);
      return [res[0], res[1]];
    }
  }
  
  sumDigits(n) {
    let sum = 0;
    let count = 0;
    while (n > 0) {
      count++;
      sum += n % 10;
      n = math.floor(n/10);
    }
    return [sum, count];
  }
  
}
