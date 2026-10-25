function solution(maps) {
    // 출발->레버->출구 
    let start = 0;
    let mid = 0;
    
    let row = maps.length
    let col = maps[0].length
    
    for(let i=0; i<row;i++){
        for(let j=0;j<col;j++){
            if(maps[i][j] === 'S') start = [i,j]
            if(maps[i][j] === 'L') mid = [i,j]
        }
    }

    const dir = [[1,0], [-1,0], [0,1], [0,-1]] // 아래, 위, 오, 왼 
    
    function BFS([sr,sc], target){
        const dis = Array.from({length:row}, () => Array(col).fill(-1));
        let queue = [[sr,sc]];
        let head = 0;
        dis[sr][sc] = 0

        while(head < queue.length){
            let [r, c] = queue[head++]; // 큐에서 하나 꺼내고 head 다음으로 이동
            if(maps[r][c] === target) return dis[r][c]

            for(const d of dir){ // 현재 위치에서 주변 확인
            const [dr, dc] = d
            let nr = r + dr 
            let nc = c + dc 

            if(nr<0 || nr>=row || nc<0 || nc>=col || maps[nr][nc] === 'X' || dis[nr][nc] !== -1){
                continue;
            }
            queue.push([nr,nc]) 
            dis[nr][nc] = dis[r][c] + 1

        }
        }
        return -1 
    }
    // 1. 출발 -> 레버까지 최단 길이
    // 2. 레버 -> 도착까지 최단 길이
    const toLever = BFS(start, 'L')
    const toExit = BFS(mid, 'E')
    if(toLever === -1 || toExit === -1) return -1
    return toLever + toExit
}