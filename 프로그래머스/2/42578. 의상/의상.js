function solution(clothes) {
    const map = new Map();
    for(let i=0;i<clothes.length;i++){
        const [value, key] = clothes[i];
        map.set(key, (map.get(key) || 0) + 1); 
    }

    let answer = 1;
    for(const v of map.values()){
        answer = answer * (v+1)
    }
    return answer -1 

}