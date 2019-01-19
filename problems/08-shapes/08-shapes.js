/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape.toLowerCase()) {
    case 'square':
      for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < height; j++) {
          row += character;  
        }
        console.log(row);
      }
      break;
    case 'triangle':
      for (let i = 1; i <= height; i++) { vhv
        let row = '';
        for (let j = 0; j < i; j++) {
          row += character;
        }
        console.log(row);
      }
      break;
    case 'diamond':
      // Create an array the size of height
      let space = ' ';
      let startPos = Math.floor(height/2);
      // Populate array with character in appropriate postion
      let i = 0;
      for (i; i <= Math.floor(height/2); i++) {
        row = '';
        let numChar = i * 2 + 1;
        //DEBUG console.log(`NumChar: ${numChar}`);
        //DEBUG console.log(`StartPos: ${startPos}`);
        let numSpaces = startPos;
        //DEBUG console.log(`NumSpaces: ${numSpaces}`);
        row += space.repeat(numSpaces);
        row += character.repeat(numChar);
        row += space.repeat(numSpaces);
        console.log(row);
        startPos = startPos/2;
      }
      //DEBUG console.log(`Index: ${i}`);
      for (--i; i > 0; i--) {
        row = '';
        //DEBUG console.log(`Index inside loop: ${i}`);
        startPos += 1;
        numChar = i * 2 -1;
        let numSpaces = startPos;
        row += space.repeat(numSpaces);
        row += character.repeat(numChar);
        row += space.repeat(numSpaces);
        console.log(row);
      }
      

      break;
  }
}

printShape('square', 5, '*');
printShape('triangle', 7, '$');
printShape('diamond', 5, '^');