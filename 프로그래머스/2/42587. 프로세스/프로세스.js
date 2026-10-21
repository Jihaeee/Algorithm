function solution(priorities, location) {
    const queue = priorities.map((x,i) => [x,i]); // [2,0] [1,1] [3,2] [2,3]
    let count = 0;
    
    while (queue.length >0){
        const cur = queue.shift() // [2,3]
        if (queue.some(([x]) => x>cur[0])) // queue에서 우선순위가 더 높은게 하나라도 있으면 
            queue.push(cur); // 맨 뒤로 보내기 
        else{
            //이게 우선순위가 제일 높은거라면
            count++;
            if(cur[1] === location) return count;
        }
    }
    
    
    
    


    
    
    
}