const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n").map(Number);

const a = [...new Array(30)].map((_, i) => i + 1);
const b = input.sort();

const array = a.filter(x=> !b.includes(x));

for (let value of array) {
    console.log(value);
}