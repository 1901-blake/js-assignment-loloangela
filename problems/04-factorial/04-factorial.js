/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if(sumNum === 1){
        return sumNum;
    }else{
       return sumNum * factorial(sumNum - 1);
    }
}
let x = 5;
console.log(`Factorial of ${x} is: ${factorial(x)}`);