const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n").map(Number);

let maxValue = Math.max(...input);
let maxIndex = input.indexOf(maxValue) + 1;

console.log(maxValue);
console.log(maxIndex);