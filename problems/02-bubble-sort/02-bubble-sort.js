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

console.log(bubbleSort([100, 55, 1, 2, 4]));
console.log(bubbleSort([99, 155, 212, 32, 14]));
console.log(bubbleSort([56, 255, 1, 22, 43]));