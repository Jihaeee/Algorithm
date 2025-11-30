let input = require("fs").readFileSync(0, "utf8").toString().trim().split(/\s+/).map(Number);

let scoreArr = input.slice(1);

const maxScore = Math.max(...scoreArr);
let sum = 0.0;

for (let value of scoreArr) {
    let score = value / maxScore*100
    sum += score;
}

console.log(sum/input[0]);