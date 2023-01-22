const fs = require('fs');

const movement = {
    '>': (position) => { return { x: position.x + 1, y: position.y } },
    '<': (position) => { return { x: position.x - 1, y: position.y } },
    '^': (position) => { return { x: position.x, y: position.y + 1 } },
    'v': (position) => { return { x: position.x, y: position.y - 1 } },
}

try {
    const data = fs.readFileSync('./input.txt', 'utf8')
    let positionsA = ['0,0'], positionsB = ['0,0']
    for (var i = 0; i < data.length-1; i+=2) {
        procesDirection(positionsA, data.charAt(i))
        procesDirection(positionsB, data.charAt(i+1))
    }
    let distinctPositions = positionsA
        .concat(positionsB).filter((v,i,a)=>a.indexOf(v)==i)
    console.log('positions visited: ' + JSON.stringify(distinctPositions))
    console.log('total houses visited: ' + distinctPositions.length)
} catch (err) {
    console.error('error reading file', err)
}

function procesDirection(positions, direction) {
    const lastPosition = positions[positions.length - 1]
    const newPosition = moveToNewPosition(lastPosition, direction)
    positions.push(newPosition)
}

function moveToNewPosition(position, direction) {
    let p = { x: parseInt(position.split(',')[0]), y: parseInt(position.split(',')[1]) }
    let newP = movement[direction](p)
    return newP.x + ',' + newP.y
}