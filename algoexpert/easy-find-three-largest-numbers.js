let input = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

function findThreeLargestNumbers(array) {
    const topThree = Array(3);

    for (const element of array) {
        if (!topThree[2] || element > topThree[2]) {
            topThree[0] = topThree[1]
            topThree[1] = topThree[2]
            topThree[2] = element
        }

    }
    console.log(topThree)
}

findThreeLargestNumbers(input)
// Answer: [18, 141, 541]