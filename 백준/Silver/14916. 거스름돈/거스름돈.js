let input = require('fs').readFileSync(0, "utf8").toString().trim()

let change = Number(input);
let num = 0;
// 13-5=8 8-5=3 /  3+5=8 8-2=6 6-5=1 1+5=6 ..
// 14-5=9 9-5=4 4-2=2 2-2=0
// 16-5=11 11-5=6 6-5=1
while (change > 0){ // 거스름돈이 0원일 때까지 반복
    while(change >= 5 ){ // 거스름돈이 5원 이상이면 무조건 5원 거슬러주는 걸로 일단 .. 
        change = change - 5 
        num++;
    }
    if (change === 0) break;

    if(change % 2 !== 0){ 
        if (num > 0){
        change = change + 5 // 8
        num--;
        change = change - 2 // 6
        num++;
        } else {
            num = -1;
            break;
        }
    } else {
        change = change -2 
        num++;
    } 
    
}

if (num === -1) console.log(-1);
else console.log(num);

