function alphabeticShift(inputString) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var inputShifted = inputString.split('');
    for (var i = 0; i < inputShifted.length; i++) {
        var index = 0;
        if (inputShifted[i] !== 'z') {
            index = alphabet.indexOf(inputShifted[i]) + 1;
        }
        inputShifted[i] = alphabet[index];
    }
    return inputShifted.join('');
}
console.log(alphabeticShift('crazy'));
