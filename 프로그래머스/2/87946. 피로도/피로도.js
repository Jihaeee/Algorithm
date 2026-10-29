function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false)
    let answer = 0

    function dfs(health,count){
        answer = Math.max(answer, count)
        
        for(let i=0;i<dungeons.length;i++){
            const [min, use] = dungeons[i]
            if(visited[i] === true || health < min) continue;
            
            visited[i] = true; 
            dfs(health-use, count+1)
            visited[i] = false;    
        }
        
    }
    dfs(k,0)
    return answer;
        
}