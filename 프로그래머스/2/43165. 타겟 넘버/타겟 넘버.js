function solution(numbers, target) {
    // 재귀와 스택
    let answer = 0;
    
    // 재귀함수가 기억해야 하는 것: 몇 번째 숫자, 합 
    function dfs(index, sum) {
        // 숫자를 다 쓰면 종료
        if(index === numbers.length){
            if(sum === target) answer++;
            return;
        }
        
        dfs(index + 1, sum + numbers[index]); // 더하는 경우
        dfs(index + 1, sum - numbers[index]); // 빼는 경우
        
        }
    dfs(0,0)
    return answer;
}