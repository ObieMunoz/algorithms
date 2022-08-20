// Solution 1 - O(n log n) time complexity | O(1) space complexity
// function moveElementToEnd(array, toMove) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === toMove) {
//             array[i] = Infinity;
//         }
//     }
//     array.sort((a, b) => a - b)
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == Infinity) array[i] = toMove
//     }
//     return array;
// }

// Solution 2 - O(n) time complexity | O(1) space complexity
function moveElementToEnd(array, toMove) {
    // Write your code here.
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        while (i < j && array[j] === toMove) {
            j -= 1;
        }
        if (array[i] === toMove) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        i += 1;
    }
    return array
}