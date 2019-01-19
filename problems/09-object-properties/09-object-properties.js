/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
/**
 * objectProperties print's a given objects fields and properties
 * @param {*} someObj
 * Author: Lori A. Oliver
 */
function objectProperties(someObj) {
    console.log(someObj);
}

let cat = {
    meow: 'Meow',
    age : [2, 16, 75, 32],
    health: 65
};
    
objectProperties(cat);