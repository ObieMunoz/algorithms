// Not sure if this is a proper bubble sort, I need to research and find out.
// This solution came without research and was achieved only by reading the Hint provided
// which is:
// Traverse the input array, swapping any two numbers that are out of order and keeping
// track of any swaps that you make. Once you arrive at the end of the array, check
// if you have made any swaps; if not, the array is sorted and you are done; otherwise,
// repeat the steps laid out in this hint until the array is sorted.

function bubbleSort(array) {
    // I will use swapping to keep track of any swaps that I made.
    let swapping = true;
    while (swapping) {
        // if this is still false at the end of the for loop, we know we are done.
        // if it is true, we need to run the for-loop again.
        swapping = false;
        for (let i = 0; i < array.length; i++) {
            let number = array[i];
            let next = array[i + 1]
            if (number > next) {
                array[i] = next
                array[i + 1] = number
                swapping = true;
            }
        }
    }
    return array
}