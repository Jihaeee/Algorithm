function solution(n, computers) {
    const visited = Array(n).fill(false)
    
    function dfs(k) {
        visited[k] = true 
        for(let i=0; i<n;i++){
            if(k===i) continue;
            if(computers[k][i] ===1 && !visited[i]) dfs(i)
        }
    }
    let answer = 0;
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        dfs(i);
        answer++;
      }
    }
    return answer;
}