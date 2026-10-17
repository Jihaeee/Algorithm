function solution(park, routes) {
    // [행, 열]
    const direction = {
        N: [-1, 0],  
        S: [1, 0],   
        W: [0, -1],  
        E: [0, 1],   
    };

    const H = park.length;    
    const W = park[0].length;  

    // 시작 위치 저장
    let r = 0, c = 0;
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (park[i][j] === "S") {
                r = i;
                c = j;
            }
        }
    }

    for (const route of routes) {
        const [op, n] = route.split(" ");
        const [dr, dc] = direction[op];

        // 임시 위치
        let nr = r, nc = c;
        let ok = true;
        for (let step = 0; step < Number(n); step++) {
            nr += dr;
            nc += dc;
            if (nr < 0 || nr >= H || nc < 0 || nc >= W || park[nr][nc] === "X") {
                ok = false;
                break;
            }
        }

        // 성공했을 때 진짜 위치에 반영 
        if (ok) {
            r = nr;
            c = nc;
        }
    }

    return [r, c];
}