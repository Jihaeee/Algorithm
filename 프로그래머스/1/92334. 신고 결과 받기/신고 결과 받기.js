function solution(id_list, report, k) {
    const reported = new Map();
    for (const r of report){
        const [from, to] = r.split(" ")
        if(!reported.has(to)) reported.set(to, new Set());
        reported.get(to).add(from);
    }
    const arr = [];
    const answer = [];
    for(const name of reported.keys()){
        if(reported.get(name).size >= k){
            arr.push(name);
        }
    }
    for(const id of id_list){
        let count = 0;
        for(const a of arr){
            if(reported.get(a).has(id)){
                count++;
            }
        }
         answer.push(count);
    }
    return answer
}
            