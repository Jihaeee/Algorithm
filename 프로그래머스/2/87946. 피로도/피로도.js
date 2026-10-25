function solution(k, dungeons) {
    // 최소 필요 피로도, 소모 피로도 
    // 던전의 순서가 중요함 
    // 가다가 최소 필요 피로도 충족 안되면 되돌아가기
    const visited = Array(dungeons.length).fill(false)
    let answer = 0;
    
    function dfs(k, count){
        answer = Math.max(answer,count);
        
        for(let i=0;i<dungeons.length;i++){
            const [need, cost] = dungeons[i];
            if(visited[i] || k<need) continue;
            
            visited[i] = true;
            dfs(k-cost, count+1);
            visited[i] = false;
        }
    }
    
    dfs(k,0);
    return answer;
        
}