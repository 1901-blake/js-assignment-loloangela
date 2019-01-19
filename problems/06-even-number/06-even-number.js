/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

/**
 * isEven calculates whether someNum = is even or odd.
 * @param {*} someNum 
 * Author: Lori A. Oliver
 */
function isEven(someNum) {
    someNum /= 2;
    return ((someNum === 1) || (someNum === 0))
    ? true
    : ((someNum > 0) && (someNum < 1))
    ? false
    : isEven(someNum)
}
console.log(`The number 5 is even: ${isEven(5)}`);
console.log(`The number 2 is even: ${isEven(2)}`);
console.log(`The number 25 is even: ${isEven(25)}`);
console.log(`The number 1 is even: ${isEven(1)}`);
console.log(`The number 0 is even: ${isEven(0)}`);