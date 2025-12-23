const fs = require('fs')
let [N, ...infos] = fs
    .readFileSync(0, "utf8")
    .toString()
    .trim()
    .split("\n")
    .map(Number)

infos.sort((a,b) => a-b)

let weight = 0;
let answer = 0;
for(let i =0; i<N; i++){
        weight = infos[i] * (N-i)
        answer = Math.max(answer, weight)
}

console.log(answer)
