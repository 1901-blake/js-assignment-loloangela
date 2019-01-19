/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

/**
 * isPalindrome accepts a string and determines if it is palindrome
 * @param {*} someStr 
 * Author: Lori A. Oliver
 */
function isPalindrome(someStr) {
    if(typeof someStr === 'string'){
        let backwards = '';

        // Remove periods and spaces. Make all lowercase
        let manipStr = someStr.replace('.', '').replace(' ','');
        do{
            manipStr = manipStr.replace('.', '').replace(' ','');
        }while((manipStr.includes(' ')) || (manipStr.includes('.')));
        manipStr = manipStr.toLowerCase();

        // Populate the string from the array in reverse order so it is backwards
        for (let i = manipStr.length -1; i >= 0; i--) {
            backwards += manipStr.charAt(i);          
        }
        return (manipStr === backwards) // Compare
            ? true
            : false
    }else{
        return "Please enter a string value!";
    }
  
}
console.log(isPalindrome("nurses run"));
console.log(isPalindrome(1));
console.log(isPalindrome('A nut for a jar of tuna.'));
console.log(isPalindrome('lori'));