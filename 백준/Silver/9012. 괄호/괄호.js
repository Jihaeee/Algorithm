// 처음 나오는 (의 개수 상관X -> 그 만큼의 ) -> 그리고 나오는 (의 개수 상관ㅌ -> )
let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

let T = Number(input[0])
let data = input.slice(1)


for(let i=0; i<T; i++){
    let str = data[i].trim()
    let arr = Array.from(str)
    let count = 0;

    for (let j=0; j<arr.length; j++){
        if (count >= 0){
            if(arr[j] === '('){
                count++;
            } else {
                count--;
         }
        } else {
            break;
            
        }
    }
if(count === 0){
    console.log("YES")
}else{
    console.log("NO")
}
}

