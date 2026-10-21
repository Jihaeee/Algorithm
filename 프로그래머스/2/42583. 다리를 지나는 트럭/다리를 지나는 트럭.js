function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridge = []; // 다리를 건너는 트럭 [무게, 시간]
    let onWeight = 0;
    
    while(truck_weights.length > 0 || bridge.length > 0){ // 모든 트럭이 다 건널 때까지 
        time++;
        
        // 다 건넌 트럭 빼기
        if(bridge.length > 0 && bridge[0][1] === time){
            onWeight -= bridge.shift()[0] // 다리를 건너야하는 트럭 목록에서 빼고 무게도 빼기 
        }
        
        if(truck_weights.length > 0 && onWeight + truck_weights[0] <= weight && bridge.length < bridge_length) {// 아직 남아있다면 1. 무게 초과하지 않는지 2. 길이 초과 확인
            const w = truck_weights.shift();  
            bridge.push([w, time+bridge_length]);
            onWeight += w
        }
    }
    
    return time;
}