function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b)
    let results = []
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            let currentSum = array[i] + array[left] + array[right]
            if (currentSum == targetSum) {
                results.push([array[i], array[left], array[right]])
                left += 1;
                right -= 1;
            } else if (currentSum < targetSum) left += 1
            else if (currentSum > targetSum) right -= 1
        }
    }
    return results;
}

// Time Complexity: O(n^2)
// Space Complexity: O(n)