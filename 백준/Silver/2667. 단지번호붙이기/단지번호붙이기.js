const fs = require('fs')
const input = fs
    .readFileSync(0,"utf8")
    .toString()
    .trim()
    .split("\n")

const N = Number(input[0]) // 지도의 크기
// 지도를 배열로
const map = input.slice(1).map(line=>line.split("").map(Number))

const dx = [-1, 1, 0, 0]
const dy = [0, 0, 1, -1]

const queue = [];
const result = [];

const visited = Array.from({length:N}, () => Array(N).fill(false))

for (let i=0;i<N;i++){
    for (let j=0;j<N;j++){
        if(map[i][j] === 1 && !visited[i][j]){
            let count = 1;
            visited[i][j] = true;
            queue.push([i, j]);
        

        while(queue.length){
            const [x,y] = queue.shift()

            for(let d=0; d<4;d++){
                const nx = x+dx[d]
                const ny = y+dy[d]

                if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
                if (visited[nx][ny]) continue
                if (map[nx][ny] === 0) continue

                visited[nx][ny] = true;
                queue.push([nx, ny])
                count++;
            }

        }

        result.push(count)
    }
    }
}

result.sort((a, b) => a - b)

console.log(result.length)
console.log(result.join('\n'))