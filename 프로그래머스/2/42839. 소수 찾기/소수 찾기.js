function solution(numbers) {
    const set = new Set();
    const used = Array(numbers.length).fill(0)

    function pick(cur){
        if(cur.length >0) set.add(Number(cur))
        for(let i=0; i<numbers.length;i++){
            if(used[i]) continue;
            used[i] = true;
            pick(cur+numbers[i]);
            used[i] = false;
        }
    }
    
    pick("");
    let arr = [];
    
    for(const n of set){
        let ok = true;
        if (n < 2) continue;  
        for(let i=2; i<n;i++){
            if(n%i === 0) {
                ok=false;
                break;
            }
           
        }
        if (ok) arr.push(n);
    }
    return arr.length;
    
}