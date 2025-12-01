let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

let arr = input.slice(1) // [ '3 4', '1 1', '1 -1', '2 2', '3 3' ]

const positionArr = arr.map(x => x.split(' ').map(Number))
let answerArr = [];
answerArr = positionArr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
});

let result = positionArr.map(([x, y]) => `${x} ${y}`).join('\n');
console.log(result);