function solution(rows, columns, queries) {
    var answer = [];
    // 행렬 만들기 
    const grid = Array.from({length:rows}, () => new Array(columns).fill(0))
    let num = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            grid[i][j] = num++;
        }
    }
    
    for(const [x1, y1, x2, y2] of queries){
        // 좌표를 배열로 넣자 
        const pos = [];
        const r1 = x1 - 1, c1 = y1 - 1, r2 = x2 - 1, c2 = y2 - 1;
        // -> 
        for(let i=c1; i<c2;i++) pos.push([r1, i]);
        for(let i=r1;i<r2;i++) pos.push([i,c2]);
        for(let i=c2; i>c1;i--) pos.push([r2, i]);
        for(let i=r2;i>r1;i--) pos.push([i,c1]);
        
        const vals = pos.map(([r, c]) => grid[r][c]);
        answer.push(Math.min(...vals));
        
        vals.unshift(vals.pop());    
        for (let k = 0; k < pos.length; k++) {
            const [r, c] = pos[k];     
            grid[r][c] = vals[k];     
}
    }
    
    
    
    
    
    return answer;
}