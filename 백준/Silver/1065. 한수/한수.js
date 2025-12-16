let N = Number(require('fs').readFileSync(0, "utf8").toString().trim())

let count = 99;
let str = [];
if (N >= 100){
    for(let i=100;i<=N;i++){
        str = String(i).split("").map(Number)
        if( (str[0]-str[1]) === (str[1]-str[2])){
            count++;
        }
}
} else { // 세 자리 수가 아니라면 input = 한수의 개수 
    count = N
}

console.log(count)