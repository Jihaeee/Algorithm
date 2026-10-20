function solution(cacheSize, cities) {
    let stack = [];
    let time = 0;
    for(let city of cities){
        city = city.toLowerCase();
        if(stack.length < cacheSize && !stack.includes(city)) {// 스택이 비어있고 해당 도시가 스택에 없을 때
            stack.push(city);
            time += 5; // cache miss

        }
        else if(stack.length >= cacheSize && !stack.includes(city)){
            stack.shift();
            stack.push(city);
            if(stack.length > cacheSize) stack.shift();
            time+=5;
        }
        else if(stack.includes(city)){ // 순서 바꿔줘야함
            const i = stack.indexOf(city);
            stack.splice(i,1);
            stack.push(city);
            time +=1;
        }

    }
    return time
 
}