// pointer 움직이고 length가 N일 때까지 .. 
const fs = require('fs')
const [N, K] = fs
    .readFileSync(0, "utf8")
    .toString()
    .trim()
    .split(" ")
    .map(Number)

let p = 0; 
const circle = Array.from({ length: N }, (_, i) => i + 1);
let result = [];

while ( circle.length >0){
    p = (p + K - 1) % circle.length
    result.push(circle[p])
    circle.splice(p, 1)
}

console.log(`<${result.join(', ')}>`)

