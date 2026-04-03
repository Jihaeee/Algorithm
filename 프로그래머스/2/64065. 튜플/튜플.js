function solution(s) {
    var answer = [];
    // s의 개수 = 튜플을 구성하는 숫자의 수
    // s 1개짜리 -> 1번, 2개짜리 2번
    const groups = s.slice(2, -2).split("},{")

    groups.sort((a, b) => a.split(",").length - b.split(",").length);
    
    groups.forEach(group => {
        const numbers = group.split(",").map(Number);
        numbers.forEach(num => {
            if (!answer.includes(num)) {
                answer.push(num);
            }
        });
        
    })
    
    return answer
   
}