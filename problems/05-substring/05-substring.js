/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

/**
 * subString gets the substring at the desired
 * @param {*} someStr 
 * @param {*} startIndex 
 * @param {*} endIndex 
 * Author: Lori A. Oliver
 */
function substring(someStr, startIndex, endIndex) {
    return (typeof someStr !== typeof '')
        ? 'Need a string for first input, you provided ' + typeof someStr
        : ((typeof startIndex === typeof(1)) && (typeof endIndex === typeof(1))) 
        ? someStr.substr(startIndex, endIndex)
        : `Need numbers for second and third input, you provided a ${typeof startIndex} and a ${typeof endIndex}`
}

console.log(substring('hello', 0, 3));
console.log(substring('Who Dat', 2, 5));
console.log(substring(2, 'where', 3));
console.log(substring('Raisin In The Sun', 'book', 3));