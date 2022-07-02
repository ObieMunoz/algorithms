function binarySearch(array, target) {
    let resultIndex = undefined;
    let leftP = 0;
    let rightP = array.length - 1;
    while (resultIndex == undefined) {
        let midP = Math.floor((leftP + rightP) / 2);
        if (array[midP] == target) resultIndex = midP;
        else if (leftP > rightP) resultIndex = -1
        else if (array[midP] > target) rightP = midP - 1;
        else if (array[midP] < target) leftP = midP + 1;
        else resultIndex = -1
    }
    return resultIndex;
}

function binarySearchRecursive(array, target) {
    return binarySearchRecursiveHelper(array, target, 0, array.length - 1)
}

function binarySearchRecursiveHelper(array, target, left, right) {
    if (left > right) return -1;
    let middle = Math.floor((left + right) / 2)
    let potentialMatch = array[middle];
    if (target == potentialMatch) return middle;
    else if (target < potentialMatch) return binarySearchRecursiveHelper(array, target, left, middle - 1)
    else if (target > potentialMatch) return binarySearchRecursiveHelper(array, target, middle + 1, right)
}
