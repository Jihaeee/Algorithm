let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

const N = Number(input[0])

const instruction = input.slice(1).map(line => line.split(" "))
let arr = [];
let result = [];

for(let i=0; i<N;i++){
    if(instruction[i][0] === 'push'){
        arr.push(instruction[i][1])
    } else if (instruction[i][0] === 'pop'){
        if(arr.length>0){
            result.push(arr[arr.length - 1])
            arr.pop()
        } else
            result.push(-1)
    } else if (instruction[i][0] === 'size'){
        result.push(arr.length)
    } else if (instruction[i][0] === 'empty'){
        if(arr.length>0){
            result.push(0)
        } else
            result.push(1)
    } else {
        if(arr.length>0){
            result.push(arr[arr.length - 1])
        } else
            result.push(-1)
    }
}
console.log(result.join('\n'))