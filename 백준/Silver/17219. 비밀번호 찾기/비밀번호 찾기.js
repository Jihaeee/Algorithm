const fs = require('fs')

const input = fs
    .readFileSync(0, "utf8")
    .toString()
    .trim()
    .split("\n")

const [N, M] = input[0].split(" ").map(Number)
const siteInfos = input.slice(1, N+1).map(line => line.split(" "))

const querySites = input.slice(N+1)

const map = {}
let output = [];

for(let i=0; i<N;i++){
    const site = siteInfos[i][0];
    const password = siteInfos[i][1]

    map[site] = password
}

for(let j=0; j< M; j++){
    output.push(map[querySites[j]])
}
console.log(output.join("\n"))