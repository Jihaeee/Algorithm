const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const T = Number(input[0]);
let idx = 1;

let result = [];

for (let i = 0; i < T; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[idx++].split(' ').map(Number);

  const dx = x1 - x2;
  const dy = y1 - y2;
  const d2 = dx * dx + dy * dy;           
  const sumR2 = (r1 + r2) * (r1 + r2);  
  const diffR2 = (r1 - r2) * (r1 - r2);   

  if (d2 === 0 && r1 === r2) {
    result.push(-1);
  } else if (d2 > sumR2 || d2 < diffR2) {
    result.push(0);
  } else if (d2 === sumR2 || d2 === diffR2) {
    result.push(1);
  } else {
    result.push(2);
  }
}

console.log(result.join('\n'));
