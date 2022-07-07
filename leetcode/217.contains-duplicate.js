function containsDuplicate(numbers) {
    let container = {};
    for (const element of numbers) {
        if (!container[element]) container[element] = 1;
        else return true
    }
    return false;
}