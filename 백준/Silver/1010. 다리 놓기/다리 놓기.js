// N
// M개 중 N개 선택하는 방법
let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")
let num = Number(input[0])
// [ [ 2, 2 ], [ 1, 5 ], [ 13, 29 ] ]
let arr = input.slice(1).map(x => x.split(" ").map(Number));

function comb(N, M) {
    let res = 1;
    for (let i=0; i< M; i++){
        res = res*(N-i) / (i+1);
    }

    return Math.round(res)
}

let answer = [];
for(let i=0; i< num; i++){
    const [N, M] = arr[i];
    answer.push(comb(M,N));
}

console.log(answer.join("\n"))