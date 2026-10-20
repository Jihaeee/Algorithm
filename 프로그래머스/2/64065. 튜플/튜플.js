function solution(s) {
    s=s.slice(2,-2).split('},{').map(x => x.split(",").map(Number))
    s.sort((a,b) => a.length - b.length);
    
    let result = [];
    const seen = new Set();
    for(const tuple of s){
        for(const num of tuple){
            if(!seen.has(num)){
                result.push(num);
                seen.add(num); // {3}
            }   
        }
    }
    return result
}