function solution(park, routes) {
    const dir = {
        'E': [0,1],
        'W': [0, -1],
        'S': [1,0],
        'N': [-1,0]
    };
    let r = park.length
    let c = park[0].length
    // 시작 지점 찾기 (row,i)
    let start = [];
    for(let i=0; i<r;i++){
        for(let j=0;j<c;j++){
            // 시작 지점 찾기 
            if(park[i][j] === 'S') start = [i,j];
        }
    }
            let [x,y] = start;
            // 경로 확인 시작
            for(const route of routes){
                const [d, num] = route.split(" ")
                let n = Number(num)
                let [dx, dy] = dir[d]
                let ok = true;
                
                for(let step=1; step<=n;step++){
                    let nx = x + dx * step
                    let ny = y + dy * step
                
                    if(nx>=r || nx<0 || ny>=c || ny<0 || park[nx][ny] === 'X') ok = false;
                }
                if(ok) { x+= dx * n; y+= dy*n}
        
            }
    return [x,y]
}