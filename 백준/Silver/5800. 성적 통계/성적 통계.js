let input = require('fs')
  .readFileSync(0, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(line => line.split(' ').map(Number));

const K = input[0][0]; // K = 반의 수

for (let i = 0; i < K; i++) {
  let arr = input[i + 1];   
  let scores = arr.slice(1); 

  scores.sort((a, b) => b - a);

  let maxNum = scores[0];
  let minNum = scores[scores.length - 1];

  let largestGap = 0;
  for (let j = 0; j < scores.length - 1; j++) {
    const gap = scores[j] - scores[j + 1];
    if (gap > largestGap) largestGap = gap;
  }

  console.log(`Class ${i + 1}`);
  console.log(`Max ${maxNum}, Min ${minNum}, Largest gap ${largestGap}`);
}
