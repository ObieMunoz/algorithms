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