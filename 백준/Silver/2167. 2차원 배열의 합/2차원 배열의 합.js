let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n").map(line => line.split(" ").map(Number));

const [N, M] = input[0]

let arr = input.slice(1,1+N) // [ [ 1, 2, 4 ], [ 8, 16, 32 ] ]

const K = input[1 + N][0];

const queries = input.slice(2 + N, 2 + N + K);

function calculateSum(i1, j1, x1, y1){
    let sum = 0;
    
    for (let i= i1-1; i<x1 ;i++){
        for(let j=j1-1; j<y1;j++){
            sum += arr[i][j] 
        }
    }
    console.log(sum);
}

for (let k = 0; k < K; k++) {
    const [i1, j1, x1, y1] = queries[k];
    calculateSum(i1, j1, x1, y1);
}