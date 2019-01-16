/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let prevNums = [0,1];
    let count = 2;
    
    if((n === 0) || (n === 1)){
        return prevNums[n];
    }else{
        for(let i = 2; i <= n; i++){
            let temp = prevNums[0] + prevNums[1];
            prevNums[0] = prevNums[1];
            prevNums[1] = temp; 
        }
        return prevNums[1];
    }
}

console.log(`First num: ${fib(1)}`);
console.log(`Second num: ${fib(2)}`);
console.log(`Third num: ${fib(3)}`);
console.log(`Fourth num: ${fib(4)}`);
console.log(`Fifth num: ${fib(5)}`);
console.log(`Sixth num: ${fib(6)}`);

console.log(`Eigth num: ${fib(8)}`);
console.log(`Tenth num: ${fib(10)}`);
console.log(`Twelth num: ${fib(12)}`);