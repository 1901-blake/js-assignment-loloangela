/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let str = '';
  let arrStr = someStr.split('');

  for (let index = arrStr.length -1 ; index >= 0; index--) {
      str += arrStr[index];
  }
  return str;
}

console.log(reverseStr("Stranger Things is a movie about strange occurrances!"));
console.log(reverseStr("What is do?"));