function isValid(s) {
    if (s.length <= 1) return false
    let temp = []
    for (element of s) {
        if (element == ')' && temp[temp.length - 1] == '(') temp.pop()
        else if (element == '}' && temp[temp.length - 1] == '{') temp.pop()
        else if (element == ']' && temp[temp.length - 1] == '[') temp.pop()
        else temp.push(element)
    }
    return temp.length == 0;
}