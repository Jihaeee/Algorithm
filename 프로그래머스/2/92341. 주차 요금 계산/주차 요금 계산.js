function solution(fees, records) {
    const [bt, bc, ut, uc] = fees;
    
    const toMin = (t) => {
        const [h,m] = t.split(":").map(Number);
        return h*60 + m;
    }
    
    const inTime = new Map();
    const total = new Map();
    
    for(const record of records){
        const [time, num, io] = record.split(" ");
        if(io === "IN"){
            inTime.set(num, toMin(time));
        }
        if(io ==="OUT"){
            const stay = toMin(time) - inTime.get(num);
            total.set(num, ((total.get(num) || 0)+ stay)); // 누적으로 계산
            inTime.delete(num); 
        }
        
    }
    
    // inTime에 남은 애들은 23:59 출차 
    for(const [num, t] of inTime){
        const stay = toMin("23:59") - t;
        total.set(num, (total.get(num) || 0) + stay);
    }
    
    const cars = [...total.keys()].sort();
    let answer = [];
    for(const c of cars){
        const time = total.get(c);
        if(time <=bt) answer.push(bc);
        else answer.push(bc + Math.ceil((time-bt) / ut) * uc)
    }
    return answer;
}