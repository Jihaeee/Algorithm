function solution(k, tangerine) {
    const map = new Map();
    let answer = 0;
    for (t of tangerine){
        map.set(t, ((map.get(t) || 0 )+1)); 
    }
    // value값이 큰 애부터 채워넣기 

        const sorted_map = [...map.values()].sort((x,y) => y-x)
        
        let i =0;
        while(k>0){
            k -= sorted_map[i]
            i++;
            answer++;
            }
    

    return answer;
        
    }
