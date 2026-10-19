function solution(n, words) {
    var answer = [];
    let turn = 1; // 차례 
    let count =0;
    const map = new Map();
    map.set(words[0], 1)
    // 1. 앞 단어의 끝 글자로 시작하는 단어인지 
    // 2. 이전에 나온 적이 없는 단어인지 
    for(let i=1;i<words.length;i++){
        let l = words[i-1].length -1 // 마지막 글자 확인용
        let prev = words[i-1]
        
        if(prev[l] !== words[i][0]) 
        {
            turn = (i%n) +1
            count = Math.floor(i/n) +1
            return [turn, count];
        }
        
        if(map.has(words[i])){
            turn = (i%n) +1
            count = Math.floor(i/n) +1
            return [turn, count];
        }
        
        map.set(words[i], 1);
        
    }
    return [0,0];

}