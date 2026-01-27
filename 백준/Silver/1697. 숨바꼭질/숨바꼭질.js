const fs = require('fs')

const input = fs
    .readFileSync(0, "utf8")
    .toString()
    .trim()
    .split(" ")
    .map(Number)

let [N, K] = input

const queue = [];
queue.push(N);

const visited = Array(100001).fill(false)
visited[N] = true;

const dist = Array(100001).fill(0)

while(queue.length){
    const x = queue.shift();

    if (x === K) {
        break;
    }

    const nextPositions = [
        x-1,
        x+1,
        x*2
    ]
    
    for (const next_x of nextPositions){
        if (next_x < 0 || next_x > 100000) continue;
        if (visited[next_x]) continue;

        visited[next_x] = true;
        dist[next_x] = dist[x] + 1
        queue.push(next_x)

    }
}

console.log(dist[K])