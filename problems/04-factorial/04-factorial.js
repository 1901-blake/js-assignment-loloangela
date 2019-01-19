/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

/**
 * factorial calculates the factorial of a number through recursion
 * @param {*} sumNum
 * Author: Lori A. Oliver
 */
function factorial(sumNum) {
    return (sumNum === 1) ? sumNum : (sumNum * factorial(sumNum -1));
}
let x = 5;
console.log(`Factorial of ${x} is: ${factorial(x++)}`);
console.log(`Factorial of ${x} is: ${factorial(x++)}`);
console.log(`Factorial of ${x} is: ${factorial(x++)}`);
console.log(`Factorial of ${x} is: ${factorial(x++)}`);