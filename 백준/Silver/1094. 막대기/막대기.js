let input = require('fs').readFileSync(0, "utf8").toString().trim()

// 64 -> 32 32 / -> 32 / 16 16 -> 16 8 8 -> 16 8 -> 16 4 4 -> 16 4 2 2 -> 16 4 2 1 
let N = 64;
let arr = [N];

function checkLength() {
    let sum = 0;
    for (let i=0; i<arr.length ; i++){
        sum +=arr[i]
    }

    return sum;
}

while ( checkLength() > input ){ // 64 > 23 
    // 가장 짧은 막대 반으로 나누기
    const total = checkLength();

    const minStick = Math.min(...arr);
    const index = arr.indexOf(minStick);
    const halfStick = minStick / 2;

    arr.splice(index, 1) // 64 지움

    if (total - halfStick >= input){
        arr.push(halfStick) // [32]
    } else {
        arr.push(halfStick); 
        arr.push(halfStick); // [32,32]
    }
}

console.log(arr.length)
    