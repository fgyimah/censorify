var censoredWords = [
    "mad",
    "sad",
    "fuck",
    "shit"
];

var customedCensoredWords = [];

//the censore function
function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****")
    }

    for (idx in customedCensoredWords) {
        inStr = inStr.replace(customedCensoredWords[idx], "****")
    }

    return inStr
}


//add new censored word function
function addCensoredWord(word) {
    customedCensoredWords.push(word)
}

function getCensoredWords() {
    return censoredWords.concat(customedCensoredWords)
}

//export the functions
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;