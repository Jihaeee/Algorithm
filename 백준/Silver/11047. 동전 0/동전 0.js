let input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number).sort((a, b) => b - a); // 큰 값부터

let count = 0;
let money = K;

for (let coin of coins) {
    if (money === 0) break;
    if (coin <= money) {
        count += Math.floor(money / coin);
        money %= coin;
    }
}

console.log(count);
