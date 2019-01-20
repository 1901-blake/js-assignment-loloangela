/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

/**
 * fib takes a number and finds the nth number in the fibonacci sequence
 * @param {*} n 
 * Author: Lori A. Oliver
 */
function fib(n) {
    let prevNums = [0,1];
    let count = 2;
    
    return (typeof n !== typeof NaN)
        ? '**Invalid Input! Please enter a number.**'
        : ((n === 0) || (n === 1))
        ? prevNums[n]
        : addNSwap(n, prevNums)
}

function addNSwap(count, array){
    for(let i = 2; i <= count; i++){
        let temp = array[0] + array[1];
        array[0] = array[1];
        array[1] = temp;
    }
    return array[1]
}
console.log(`Not a num: ${fib("Hi")}`);
console.log(`First num: ${fib(1)}`);
console.log(`Second num: ${fib(2)}`);
console.log(`Third num: ${fib(3)}`);
console.log(`Fourth num: ${fib(4)}`);
console.log(`Fifth num: ${fib(5)}`);
console.log(`Sixth num: ${fib(6)}`);

console.log(`Eigth num: ${fib(8)}`);
console.log(`Tenth num: ${fib(10)}`);
console.log(`Twelth num: ${fib(12)}`);