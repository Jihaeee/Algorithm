let input = require('fs').readFileSync(0, "utf8").toString().trim()

let num = 666;
let arr = []; // 666 배열

while ( arr.length < input ){
    if (String(num).includes("666")) {
        arr.push(num);
    }
    num++;
}

arr.sort((a, b) => a - b);
console.log(arr[input - 1]);