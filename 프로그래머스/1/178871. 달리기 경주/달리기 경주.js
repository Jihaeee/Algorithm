function solution(players, callings) {
    const rank = new Map();
    for(let i=0; i<players.length;i++){
        rank.set(players[i], i)
    }
    
    for (const name of callings){
        const cur = rank.get(name) // 현재 순위 3
        // cur-1인 애랑 자리 바꾸기 
        const front = players[cur -1]; // poe
        
        [players[cur-1], players[cur]] = [players[cur], players[cur-1]];
        
        rank.set(name, cur-1);
        rank.set(front, cur);
    }
    return players
}