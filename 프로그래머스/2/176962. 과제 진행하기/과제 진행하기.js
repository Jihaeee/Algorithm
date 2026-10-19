function solution(plans) {
    var answer = [];
    const toMin = (t) => {
        const [h,m] = t.split(":").map(Number);
        return h*60 + m
    }

    plans.sort((a,b) => toMin(a[1])-toMin(b[1]));
    const stack = []; // 멈춰둔 과제용
    
    for(let i=0; i<plans.length; i++){
        let free = 0;
        const [n1, s1, p1] = plans[i];
        if(i+1 <plans.length) {
            const[n2,s2,p2] = plans[i+1];
            free = toMin(s2)- toMin(s1);
        }
        else{ // 마지막인 경우 사용가능한 시간이 무한함
            free = Infinity;
        }
        
        if(Number(p1) <= free) {
            answer.push(n1);
            free -= Number(p1);
        
            // 멈춰둔 과제가 있다면 이어서 하기 
            while(stack.length >0 && free>0){
                const top = stack.pop() // computer 90
                if(top[1] <= free){
                    answer.push(top[0]);
                    free -= top[1];
                } else {
                    top[1] -= free;
                    stack.push(top);
                    free = 0;
                }
            
            }
        } else { // 남은 시간보다 해야하는 시간이 길다면 
            stack.push([n1, Number(p1)-free]) // music 30 computer 90  
        }
        
    }
        
    return answer;
}