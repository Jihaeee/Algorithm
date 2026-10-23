function solution(dirs) {
    const direction = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0],
    };
    
    let x =0, y=0;
    const roads = new Set();
    
    for(const d of dirs){
        const [dx, dy] = direction[d]
        // 이동
        const nx = x + dx
        const ny = y + dy
        
        // 경계, 방문했는지의 여부 판단
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        roads.add(`${nx},${ny} -> ${x}${y}`)
        roads.add(`${x},${y} -> ${nx}${ny}`)
        
        x= nx;
        y= ny;
    }

    return roads.size/2
 }