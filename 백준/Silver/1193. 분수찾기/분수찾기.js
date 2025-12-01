let input = Number(require('fs').readFileSync(0, "utf8").toString().trim())

// 합으로 ? 1/1 -> (1/2 -> 2/1) -> (3/1 -> 2/2 -> 1/3) -> 1/4 -> 2/3
// 첫번째 대각선 1개, 2번째 대각선 2개  ... n번째 대각선 n개  -> input은 몇 번째 대각선에 있는지 
// 1번째 합 2, 2번째 합 3
let line = 1; 
let count = 0; 
while ( input > line ) {
    input -= line; // 14-1 13-2 11-3 8-4 line=4 
    line ++;
    count += line; // 1+2+3+4 
}

let sum = line + 1; // sum=5


if (line % 2 === 0) { // line 짝수면 y 감소
    let y = sum - input
    let x = sum -y 
    console.log(`${x}/${y}`)
}

else {
    let x = sum - input
    let y = sum - x
    console.log(`${x}/${y}`)
}
