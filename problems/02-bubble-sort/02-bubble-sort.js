/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
/**
 * bubbleSort performs the bubbleSort then returns the sorted array
 * @param {*} numArray 
 * Author: Lori A. Oliver
 */
function bubbleSort(numArray) {
    let finished;
    do {
        finished = true;
        numArray.forEach((element, i, numArray) => {
            if(element > numArray[i + 1]){
                let temp = numArray[i + 1];
                numArray[i + 1] = element;
                numArray[i] = temp;
                finished = false;
            }
        });
    } while (!finished);  
    return numArray; 
}
let x = [100, 55, 1, 2, 4], y = [99, 155, 212, 32, 14];
let z = [56, 255, 1, 22, 43];
console.log(`Original function: ${x} \nSorted function: ${bubbleSort(x)}`);
console.log(`Original function: ${y} \nSorted function: ${bubbleSort(y)}`);
console.log(`Original function: ${z} \nSorted function: ${bubbleSort(z)}`);