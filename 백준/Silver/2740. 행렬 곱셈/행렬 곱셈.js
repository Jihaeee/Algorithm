let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n").map(line => line.split(" ").map(Number))

const [N, M] = input[0]
const K = input[1+N][1]

let firstArr = input.slice(1, 1+N) // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
let secondArr = input.slice(N+2, N+2+M) // [ [ -1, -2, 0 ], [ 0, 0, 3 ] ]

// result[i][j] = Σ(firstArr[i][k] * secondArr[k][j])
let result = Array.from({ length: N }, () => Array(K).fill(0));

for(let i=0; i< N;i++){
    for(let j=0; j< K; j++){
        let sum =0;
        for(let k=0;k<M; k++){
            sum += firstArr[i][k] * secondArr[k][j]
        }
        result[i][j] = sum;
    }
}

console.log(result.map(line => line.join(" ")).join("\n"))
