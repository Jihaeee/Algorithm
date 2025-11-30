const fs = require('fs')
const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n").map(Number);

const array = [];

for (let value of input){
    const a = value % 42;
    array.push(a);
}

let setArr = [...new Set(array)];

console.log(setArr.length)