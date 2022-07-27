const replaceWords = function (dictionary, sentence) {
    sentence = sentence.split(' ');
    for (let i = 0; i < sentence.length; i++) {
        for (const element of dictionary) {
            if (sentence[i].startsWith(element)) sentence[i] = element
        }
    }
    return sentence.join(' ')
};