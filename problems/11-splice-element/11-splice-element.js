/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

/**
 * spliceElement removes one element from the given array
 * @param {*} someArr
 * @param {*} index
 * Author: Lori A. Oliver
 */
function spliceElement(someArr, index) {
  someArr.splice(index, 1);
  return someArr;
}

// Array
let myArr = ['Good', 'Morning', 'Miami', 1, 2, 3, {
    name: 'apple',
    classification: 'fruit'
},
{
    name: 'broccoli',
    classification: 'vegetable'
}];

console.log(`Original array: `);
console.log(myArr);
console.log('After Splice:')
console.log(spliceElement(myArr, 2));