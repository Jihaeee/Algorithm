// a[0] 내림차순 -> a[1] 확인

// 88 60 58 55 46 
// 1 2 3 4 5 

// 다 똑같이 1등으로 index 해놓고 비교해서 다 큰 게 있다면 +1 , 개수에 따라 .. 

let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

let arr = input.slice(1).map(x => x.split(" ").map(Number))

let newArr = []; 
for (let i=0; i< input.length -1 ; i++){
    let count = 1;
    for( let j=0; j< input.length -1; j++){
        if (i===j) continue;
        if ((arr[i][0] < arr[j][0]) && (arr[i][1] < arr[j][1])){
            count ++;
        }
    }
    newArr.push(count);
}

console.log(newArr.join(" "))