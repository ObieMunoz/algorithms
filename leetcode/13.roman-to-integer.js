function romanToInteger(string) {
    let map = {
        'I': 1, // Can be before V or X
        'V': 5,
        'X': 10, // Can be before L or C
        'L': 50,
        'C': 100, // Can be before D or M
        'D': 500,
        'M': 1000
    }

    let workingArray = string.split('');

    for (let i = 0; i < string.length; i++) {
        workingArray[i] = map[workingArray[i]]
    }

    for (let i = 0; i < string.length; i++) {
        if (workingArray[i] == 1 && (workingArray[i + 1] == 5 || workingArray[i + 1] == 10)) {
            workingArray[i + 1] = workingArray[i + 1] - workingArray[i]
            workingArray[i] = null;
        }
        if (workingArray[i] == 10 && (workingArray[i + 1] == 50 || workingArray[i + 1] == 100)) {
            workingArray[i + 1] = workingArray[i + 1] - workingArray[i]
            workingArray[i] = null;
        }
        if (workingArray[i] == 100 && (workingArray[i + 1] == 500 || workingArray[i + 1] == 1000)) {
            workingArray[i + 1] = workingArray[i + 1] - workingArray[i]
            workingArray[i] = null;
        }
    }
    return workingArray.reduce((prev, current) => prev + current, 0)
}
