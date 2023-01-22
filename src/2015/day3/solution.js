const fs = require('fs');

const movement = {
    '>': (position) => { return { x: position.x + 1, y: position.y } },
    '<': (position) => { return { x: position.x - 1, y: position.y } },
    '^': (position) => { return { x: position.x, y: position.y + 1 } },
    'v': (position) => { return { x: position.x, y: position.y - 1 } },
}

try {
    const data = fs.readFileSync('./input.txt', 'utf8')
    let positions = ['0,0']
    for (var i = 0; i < data.length; i++) {
        const c = data.charAt(i)
        const lastPosition = positions[positions.length - 1]
        const newPosition = moveToNewPosition(lastPosition, c)
        positions.push(newPosition);
    }
    console.log('positions visited: ' + JSON.stringify(positions))
    console.log('total houses visited: ' + positions.filter((v,i,a)=>a.indexOf(v)==i).length)
} catch (err) {
    console.error('error reading file', err)
}

function moveToNewPosition(position, direction) {
    let p = { x: parseInt(position.split(',')[0]), y: parseInt(position.split(',')[1]) }
    let newP = movement[direction](p)
    return newP.x + ',' + newP.y
}