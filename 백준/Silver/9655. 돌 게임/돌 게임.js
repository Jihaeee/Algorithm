// 1 -> 2/4 -> 3,5,7 ->  4,6,8,10
// 3 -> 4,6 -> 5,7,9 -> 6,8, .. 

let input = require('fs').readFileSync(0,"utf8").toString().trim()

const N = Number(input)

if (N%2 === 0){
    console.log("CY")
} 
else {
    console.log("SK")
}