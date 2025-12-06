// 2, 5 1번 나눠지면 1, 2번 나눠지면 2 .. 
let input = require('fs').readFileSync(0, "utf8").toString().trim()
let count = 0;

// 소인수분해 5의 개수 찾기 
for (let i = 5; i <= input; i *= 5) {
    count += Math.floor(input / i);
}

console.log(count);