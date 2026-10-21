function solution(progresses, speeds) {
    var answer = [];
    let stack = [];
    
    stack = progresses.map((x,i) => Math.ceil((100-x)/speeds[i])) // [ 5, 10, 1, 1, 20, 1 ]
    let prev = 0;
    let count =0;
    
    for(let i=0;i<stack.length;i++){
        if(prev >= stack[i]) { // 
            prev = Math.max(stack[i], prev) // prev=10
            count = answer.at(-1) || 0
            answer.pop() 
            count++; // 7>=3, 이전 개발 일보다 걸리는 수가 적다면 +1
            answer.push(count) // 1
        }
        else { // 10, 이전 개발 일보다 걸리는 수가 많다면 이전 개발에 대해서 count 넣고
            prev = Math.max(stack[i], prev) // prev=10
            count = 0;
            count++; // 이번 개발 일에 대해서 끝낸 작업 수 +1
            answer.push(count) // 1
        }
        
    }
    return answer
}