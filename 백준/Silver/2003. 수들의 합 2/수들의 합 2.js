const fs = require('fs')

const [nm, ...input] = fs
    .readFileSync(0, "utf8")
    .toString()
    .trim()
    .split("\n")

const [N, M] = nm.split(" ").map(Number)
const arr = input[0].split(" ").map(Number)

let count = 0;
let sum = arr[0];
let i = 0;
let j = 0;

while(j < N){
    if ( sum === M){
        count++;
        sum -= arr[i]
        i++;
    } else if (sum < M) {
        j++;
        if ( j < N ) sum += arr[j]
        } else {
            sum -= arr[i]
            i++;
        } 
}

console.log(count)