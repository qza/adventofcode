import * as fs from 'fs';

try {
    const data = fs.readFileSync('./input.txt', 'utf8')
    let totalNice = 0
    data.split(/\r?\n/).forEach(function (line) {
        if (checkRepeatingSequence(line) && checkRepeatingPairs(line)) {
            totalNice += 1
        }
    })
    console.log('total nice strings: ' + totalNice)
} catch (err) {
    console.error('error reading file', err)
}

function checkRepeatingSequence(input) {
    let matches = input.match(/(.{1})(.){1}(?:\1)/g) || [];
    return matches.length > 0
}

function checkRepeatingPairs(input) {
    const matches = input.match(/(.{2,})(.*)(?:\1)/g) || [];
    return matches.length > 0
}