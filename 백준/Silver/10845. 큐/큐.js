const fs = require('fs')
let [_, ...ops] = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

let q = [];
let f = 0;
const result = [];

for (const line of ops){
    const [cmd, val] = line.split(" ");
    switch (cmd) {
        case "push":
            q.push(val)
            break;
        case "pop":
            result.push( f < q.length ? q[f++]: -1);
            break;
        case "size":
            result.push(q.length-f);
            break;
        case "empty":
            result.push(f >= q.length ? 1 : 0);
            break;
        case "front":
            result.push(f<q.length ? q[f] : -1)
            break;
        case "back":
            result.push(f<q.length ? q[q.length-1] : -1 )
            break;
    }
}

console.log(result.join("\n"))