let input1 = [1, 3]
let input2 = [2, 4]

function findMedianSortedArrays(array1, array2) {
    let combinedArray = array1.concat(array2)
    combinedArray.sort((a, b) => a - b);
    if (combinedArray.length % 2 != 0) {
        let mid = Math.floor(combinedArray.length / 2);
        return combinedArray[mid]
    } else if (combinedArray.length % 2 == 0) {
        let mid = combinedArray.length / 2;
        return (combinedArray[mid] + combinedArray[mid - 1]) / 2
    }
}

findMedianSortedArrays(input1, input2);