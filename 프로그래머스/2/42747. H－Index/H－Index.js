function solution(citations) {
    const n = citations.length;
    citations.sort((a,b) => a-b)
    // 0 1 3 3 3 3 
    // 3 5 8 9 10 
    let answer = 0;
    for(let i = 0; i<n;i++){
        const h = Math.min(citations[i], n-i )
        answer = Math.max(answer,h )
    }
    
    return answer;
}