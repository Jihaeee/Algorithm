function solution(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    let j1 = [];
    let j2 =[];
    
    for(let i=0; i<str1.length -1; i++){
        let sliced1 = str1.slice(i,i+2) 
        console.log(sliced1)
        // 1. 특수문자 있는지 확인해서 없어야 push
        if(/^[a-z]{2}$/.test(sliced1)) j1.push(sliced1);
    }
    
    for(let i=0; i<str2.length -1; i++){ 
        let sliced2 = str2.slice(i,i+2) 
        // 1. 특수문자 있는지 확인해서 없어야 push
        if(/^[a-z]{2}$/.test(sliced2)) j2.push(sliced2);
    }
    
    const j1Map= new Map();
    const j2Map = new Map();
    
    for(let i=0;i<j1.length; i++){
        j1Map.set(j1[i], (j1Map.get(j1[i]) || 0) +1)
    }
    
    for(let i=0;i<j2.length; i++){
        j2Map.set(j2[i], (j2Map.get(j2[i]) || 0) +1)
    }
    
    console.log(j1Map, j2Map)
    
    let inter = 0, union=0;
    const keys = new Set([...j1Map.keys(), ...j2Map.keys()]);
    console.log(keys)
    for(const k of keys){
        inter += Math.min(j1Map.get(k) || 0,j2Map.get(k) || 0);
        union += Math.max(j1Map.get(k) || 0,j2Map.get(k) || 0);
        console.log(inter, union)
    }
    
    if (union === 0) return 65536
    return Math.floor((inter / union) * 65536)
}