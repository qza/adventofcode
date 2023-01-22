import * as fs from 'fs';

try {
    const data = fs.readFileSync('./input.txt', 'utf8')
    let totalNice = 0
    data.split(/\r?\n/).forEach(function (line) {
        if (checkVowels(line) && checkRepeatingChars(line) && checkSubstrings(line)) {
            totalNice += 1
        }
    })
    console.log('total nice strings: ' + totalNice)
} catch (err) {
    console.error('error reading file', err)
}

function checkSubstrings(input) {
    return (input.match(/(ab|cd|pq|xy)+/g) || []).length == 0
}

function checkVowels(input) {
    let matches = input.match(/[aeiou]+?/g) || [];
    // matches = matches.filter((v,i,a)=>a.indexOf(v)==i)
    console.log("matches ", matches, matches.length)
    return matches.length >= 3
}

function checkRepeatingChars(input) {
    return (input.match(/(.)\1/g) || []).length >= 1
}