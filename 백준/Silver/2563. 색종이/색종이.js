const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const num = Number(input[0]);
const paperArr = input.slice(1).map(x => x.split(" ").map(Number));

const board = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let k = 0; k < num; k++) {
  const [x, y] = paperArr[k];

  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      board[j][i] = 1;  
    }
  }
}

let area = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (board[i][j] === 1) area++;
  }
}

console.log(area);
