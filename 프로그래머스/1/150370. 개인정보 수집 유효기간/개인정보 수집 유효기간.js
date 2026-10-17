function solution(today, terms, privacies) {
    const today_arr = today.split(".").map(Number); // [2022, 5, 19]
    const day = (today_arr[0] * 28 * 12) + (today_arr[1] * 28) + today_arr[2]
    
    const term_map = new Map();
    for(const t of terms){
        const [type, month] = t.split(" ");
        term_map.set(type, Number(month) * 28)
    }
    let answer = [];
    let count=1;
    
    for (const p of privacies){
        const [date, type] = p.split(" "); 
        const [y, m, d] = date.split(".").map(Number);
        const collected = y * 28 *12 + m * 28 + d
        
        if(term_map.get(type) + collected <= day){
            answer.push(count);
        }
        count++;
    }
    return answer;
    
}