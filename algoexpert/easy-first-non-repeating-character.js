function firstNonRepeatingCharacter(string) {
    let dict = {}
    for (let i = 0; i < string.length; i++) {
        dict[i] = string[i]
    }

    for (let i = 0; i < Object.keys(dict).length; i++) {
        if (Object.values(dict).filter(value => value == string[i]).length == 1) return i
    }
    return -1
}
