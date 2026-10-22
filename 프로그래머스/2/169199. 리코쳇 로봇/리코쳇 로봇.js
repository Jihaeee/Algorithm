function solution(board) {
    const n = board.length;     // 행 수
    const m = board[0].length;  // 열 수
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    // 시작 위치 찾기: R
    let start;
    for(let i=0; i<board.length;i++){
        for(let j=0; j<board[0].length;j++){
            if(board[i][j] === 'R') start = [i,j];
        }
    }
    
    const distance = Array.from({length: n}, () => Array(m).fill(-1))
    let r = start[0];
    let c = start[1];
    distance[r][c] = 0; // 시작일 때 거리 0 
    let queue = [[r,c]];
    let head = 0;
    
    while(head < queue.length){
        const [r,c] = queue[head++];
        
        if(board[r][c] === 'G') return distance[r][c];
    
        // 끝을 만나거나 D를 만날 때까지 이동 
        for(const [dr, dc] of directions){
            let nr = r;
            let nc = c;
            
            while(true){
                const tr = nr + dr
                const tc = nc + dc
                if(tr<0 || tr>=n || tc <0 || tc>=m || board[tr][tc] === 'D') break;
                nr = tr;
                nc = tc;
            }
            
            if(distance[nr][nc] !== -1) continue;
            distance[nr][nc] = distance[r][c] +1;
            queue.push([nr,nc]);
            
    }
    }
    
        return -1;
}