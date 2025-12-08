// 0, 1 연속성 배열 확인 -> 더 작은 숫자 정답
let input = require('fs').readFileSync(0, "utf8").toString().trim()

let arr = Array.from(input)
let count = 0;

for (let i=1; i<arr.length; i++){
    if (arr[i-1] != arr[i]){
        count++;
    }

}

if (count%2 ===0){
    console.log(count/2)
}
else {
    console.log((count+1)/2)
    }
