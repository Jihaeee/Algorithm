const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split(" ").map(Number);

const [x, y, w, h] = input;

console.log(Math.min(x, y, w-x, h-y));