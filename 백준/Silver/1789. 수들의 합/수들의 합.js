let input = require('fs').readFileSync(0, "utf8").toString().trim()

// 제일 작은 거 선택
// 200 -1 / 199 -2 / 197-3 / 194-4 ... / 47-18 / 29-19 / 10 
let arr = [];
for (let i=1; ; i++){
    if(input - i - (i+1) < 0){
        arr.push(input);
        break;
    }
    else {
        input = input - i
        arr.push(i)
    }
}

console.log(arr.length)