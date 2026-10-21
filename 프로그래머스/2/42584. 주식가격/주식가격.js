function solution(prices) {
    var answer = [];
    
    for(let i=0; i<prices.length;i++){
        let period = 0;
        let t=-1;
        for(let j=i; j<prices.length; j++){
            t++;
            if (prices[j] < prices[i]) break; 
        }
        answer.push(t)
        }
    return answer;
}