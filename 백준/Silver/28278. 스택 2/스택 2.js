const fs = require('fs')
const input = fs
    .readFileSync(0, "utf8")
    .toString()
    .trim()
    .split("\n")

const N = Number(input[0])

let stack = [];
let top = -1;
let out = [];

for(let i=1; i<= N ; i++){
    let parts = input[i].split(" ")
    let cmd = Number(parts[0]);
    let value = parts[1] ? Number(parts[1]) : null;

    switch(cmd){
        case 1:
            stack[++top] = value;
            break;
        case 2:
            top === -1 ? out.push(-1) : out.push(stack[top--])
            break;
        case 3:
            out.push(top+1) 
            break;
        case 4:
            top === -1 ? out.push(1) : out.push(0)
            break;
        case 5: 
            top === -1 ? out.push(-1) : out.push(stack[top])
            break;            
    }
}

console.log(out.join("\n"))