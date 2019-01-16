/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let finished;
    do {
        finished = true;
        for (let i = 0; i < numArray.length - 1; i++) {
            if(numArray[i] > numArray[i + 1]){
                let temp = numArray[i + 1];
                numArray[i + 1] = numArray[i];
                numArray[i] = temp;
                finished = false;
            }   
        }
    } while (!finished);  
    return numArray; 
}

console.log(bubbleSort([100, 55, 1, 2, 4]));
console.log(bubbleSort([99, 155, 212, 32, 14]));
console.log(bubbleSort([56, 255, 1, 22, 43]));