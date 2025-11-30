const fs = require('fs');

const input = fs.readFileSync(0, "utf8").toString().trim().split(" ");

console.log(`a = ${input[0]}`)
console.log(`b = ${input[1]}`)