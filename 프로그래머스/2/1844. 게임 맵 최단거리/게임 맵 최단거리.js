function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    let queue = [];
    let head = 0;

    let visited = Array.from({ length: N }, () => Array(M).fill(false));

    queue.push([0, 0]);
    visited[0][0] = true;

    while (head < queue.length) {
        const [x, y] = queue[head++];

        if (x === N - 1 && y === M - 1) {
            return maps[x][y];
        }

        for (let d = 0; d < 4; d++) {
            const nx = x + dx[d];
            const ny = y + dy[d];

            if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
            if (visited[nx][ny]) continue;
            if (maps[nx][ny] === 0) continue;

            visited[nx][ny] = true;
            maps[nx][ny] = maps[x][y] + 1;

            queue.push([nx, ny]);
        }
    }

    return -1; 
}