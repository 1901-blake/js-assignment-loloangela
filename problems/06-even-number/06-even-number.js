/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(someNum) {
  if((someNum > 0) && (someNum < 1)){
      return false;
  }else if(someNum === 1){
      return true;
  }else{
      //DEBUG console.log(`Division is ${someNum/2}`);
      return isEven(someNum/2);
  }
}
console.log(isEven(5));
console.log(isEven(2));
console.log(isEven(25));