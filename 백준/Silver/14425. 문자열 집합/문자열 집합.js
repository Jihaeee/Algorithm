const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const S = new Set();
let idx = 1;

for (let i = 0; i < N; i++) {
  S.add(input[idx++]);
}

let count = 0;

for (let i = 0; i < M; i++) {
  if (S.has(input[idx++])) count++;
}

console.log(count);
