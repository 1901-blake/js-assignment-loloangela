/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    if(typeof someStr === 'string'){
        let backwards = '';
        let manipStr = someStr.replace('.', '').replace(' ','');
        do{
            manipStr = manipStr.replace('.', '').replace(' ','');
        }while((manipStr.includes(' ')) || (manipStr.includes('.')));
        manipStr = manipStr.toLowerCase();
        
        for (let i = manipStr.length -1; i >= 0; i--) {
            backwards += manipStr.charAt(i);          
        }
        if(manipStr === backwards){
            return true;
        }else{
            //DEBUG console.log(`The backwards version is ${backwards}`);
            return false;
        }
    }else{
        return "Please enter a string value!";
    }
  
}
console.log(isPalindrome("nurses run"));
console.log(isPalindrome(1));
console.log(isPalindrome('A nut for a jar of tuna.'));