const fs = require('fs');

try {
    const data = fs.readFileSync('./input.txt', 'utf8')
    let totalSurface = 0, totalRibon = 0
    data.split(/\r?\n/).forEach(function (line) {
        const elements = line.split(/x/)
        totalSurface += wrapSurface(elements[0], elements[1], elements[2])
        totalRibon += ribonLength(elements[0], elements[1], elements[2])
    })
    console.log('total required surface: ' + totalSurface)
    console.log('total required ribbon: ' + totalRibon)
} catch (err) {
    console.error('error reading file', err)
}

function wrapSurface(l, w, h) {
    let a = l * w
    let b = w * h
    let c = h * l
    let more = Math.min(a, b, c)
    return 2 * a + 2 * b + 2 * c + more
}

function ribonLength(l, w, h) {
    let x = [l, w, h].sort((a, b) => a - b)
    return 2 * x[0] + 2 * x[1] + x[0] * x[1] * x[2]
}