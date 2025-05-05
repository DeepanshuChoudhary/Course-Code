'use strict'

// console.log(Number.MAX_SAFE_INTEGER + 4);

// console.log(Number.MIN_SAFE_INTEGER);

var bigIntNum = BigInt(Number.MAX_SAFE_INTEGER);

// console.log(bigIntNum);

// console.log(bigIntNum + 1n); /* Cannot mix BigInt and other types, to solve this issue we have to put 'n' after 1 = 1n */ 

var aLargeNumber = 19_007_199_254_740_990n;

console.log(aLargeNumber + 1n); /* If i use just + 1, it doesn't work if i put + 1n, it works */