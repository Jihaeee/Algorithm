function solution(word) {
    const vowels = [ 'A', 'E', 'I', 'O', 'U']
    const dict = [];
    
    function pick(cur){
        if(cur.length > 0) dict.push(cur);
        if(cur.length === 5) return;
        for(const v of vowels){
            pick(cur+v)
        }
    }
    pick("")
    dict.sort()
    
    for(const d of dict){
        if (d === word) {
            return dict.indexOf(d)+1
    }
}
}