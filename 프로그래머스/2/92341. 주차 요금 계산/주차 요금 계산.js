function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees
    
    const statusMap = {};
    const totalTime = {};
    records.forEach(line => {
        const [time, number, status ] = line.split(" ")
        const [h, m] = time.split(":").map(Number)
        
        const totalMinutes = h*60 + m
        
        if(status === "IN") {
            statusMap[number] = totalMinutes
        } else {
            const duration = totalMinutes - statusMap[number];
            totalTime[number] = (totalTime[number] || 0) + duration;
            delete statusMap[number]
        }
    })
    
        for (const num in statusMap){
            const duration = 1439 - statusMap[num]
            totalTime[num] = (totalTime[num] || 0) + duration;
        }
        
        const result = Object.keys(totalTime)
        .sort()
        .map(num => {
            const time = totalTime[num];
            if (time <= baseTime) return baseFee; 
            
            return baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee;
        });
    return result;
}