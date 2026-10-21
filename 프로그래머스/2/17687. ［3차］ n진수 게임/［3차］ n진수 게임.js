function solution(n, t, m, p) {
    var answer = '';
    let all ="";
    let num = 0;
    while(all.length < t*m){
        all += num.toString(n).toUpperCase();
        num++;
    }
    console.log(all)
    // 0, 1, 1, 0, 1, 1, 1, 0
    for(let i=p-1; answer.length < t;i+=m){ // 인원수로 나눠서 나머지가 p인 
        answer += all[i]
        }
    
    return answer;
}