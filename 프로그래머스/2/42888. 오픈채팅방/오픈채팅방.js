function solution(record) {
    const name = new Map();
    
    for(const r of record){
        const[status, id, nickname] = r.split(" ");

        if(status === "Enter"){
            name.set(id, nickname);
        }
        
        if(status === "Change"){
            name.set(id, nickname)
        }
    }
    let result = [];
    for(const r of record){
        const[status, id, nickname] = r.split(" ");
        if(status === "Enter") result.push(`${name.get(id)}님이 들어왔습니다.`)
        if(status ==="Leave") result.push(`${name.get(id)}님이 나갔습니다.`)
    }
    return result;
    
    
}