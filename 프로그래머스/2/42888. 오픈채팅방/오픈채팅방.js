function solution(record) {
    var answer = [];
    let idArray = [];
    let statusMap=[];
    
    record.forEach(line=>{
        const [status, userId, nickname] = line.split(" ")
        
        if (nickname) {
            idArray[userId] = nickname // uid1234: Muzi
        } 
        
        if (status != 'Change') {
            statusMap.push([status, userId])
        }
    })
    
    for(let i=0;i<statusMap.length;i++){
        let name = idArray[statusMap[i][1]]
        if (statusMap[i][0] == 'Enter'){
            answer.push(`${name}님이 들어왔습니다.`)
        } else {
            answer.push(`${name}님이 나갔습니다.`)
        }
    }

    return answer
    
}