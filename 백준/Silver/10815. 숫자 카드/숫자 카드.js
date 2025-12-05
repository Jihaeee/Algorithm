let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

let originArr = input[1].split(" ")
let compareArr = input[3].split(" ")

let originSet = new Set(originArr);

let resultArr = [];

for (let value of compareArr) {
    resultArr.push(originSet.has(value) ? 1 : 0);
}

console.log(resultArr.join(" "));