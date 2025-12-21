const fs = require('fs')
const [N, ...ops] = fs.readFileSync(0, "utf8").toString().trim().split("\n")

let front = 0;
let queue = [];
let output = [];

for(let i=0; i<N ; i++){
    const [cmd, value] = ops[i].split(" ")

    switch(cmd){
        case "push":
            queue.push(Number(value))
            break;
        case "pop":
            if (front < queue.length) output.push(queue[front++])
            else output.push(-1)
            break;
        case "size":
            output.push(queue.length - front)
            break;
        case "empty":
            if  (front >= queue.length) output.push(1)
            else output.push(0)
            break;
        case "front":
            if(front < queue.length) output.push(queue[front])
            else output.push(-1)
            break;
        case "back":
            if(front<queue.length) output.push(queue[queue.length -1])
            else output.push(-1)
            break;
    }
}

console.log(output.join("\n"))