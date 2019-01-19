/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  // If by splicing we want to remove a specific element
  someArr.splice(index, 1);
  return someArr;
}

let myArr = ['Good', 'Morning', 'Miami', 1, 2, 3, {
    name: 'apple',
    classification: 'fruit'
},
{
    name: 'broccoli',
    classification: 'vegetable'
}];
console.log(spliceElement(myArr, 2));