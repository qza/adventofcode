const fs = require('fs');

try {
    const txt = fs.readFileSync('./input.txt', 'utf8').trim();
    let floor = 0, firstBellowZero = -1;
    for (var i = 1; i <= txt.length; i++) {
        let c = txt.charAt(i-1);
        if (c == '(') {
            floor += 1;       
        }
        else if (c == ')') {
            floor -= 1;
        } else {
            console.warn('unknown character in input: ' + c);
        }
        if (firstBellowZero == -1 && floor < 0) {
            firstBellowZero = i;
            
        }
    }
    console.log('santas floor: ' + floor);
    console.warn('floor went bellow zero at element: ' + firstBellowZero);
} catch (err) {
    console.error("error reading input", err);
}