function findThreeLargestNumbers(array) {
    let first = undefined;
    let second = undefined;
    let third = undefined;
    for (const element of array) {
        if (!first || element > first) {
            third = second;
            second = first;
            first = element;
        }
        else if (!second || element > second) {
            third = second;
            second = element;
        }
        else if (!third || element > third) third = element;
    }
    console.log([third, second, first])
    return [third, second, first]
}