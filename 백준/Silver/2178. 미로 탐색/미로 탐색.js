const fs = require('fs')
let input = fs
    .readFileSync(0, "utf8")
    .toString()
    .trim()
    .split("\n")

const [N, M] = input[0].split(" ").map(Number)
let arr = input.slice(1).map(line => line.split('').map(Number))

const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

let queue = [[0,0]]

while (queue.length) {
    const [x, y] = queue.shift()

    for(let d=0; d<4;d++){
        const nx= x+dx[d]
        const ny = y+dy[d]

        if(nx<0 || ny<0 || nx >=N || ny>= M) continue;

        if(arr [nx][ny] ===1) {
            arr[nx][ny] = arr[x][y] + 1
            queue.push([nx, ny]);
        }
    }
}

console.log(arr[N - 1][M - 1]);