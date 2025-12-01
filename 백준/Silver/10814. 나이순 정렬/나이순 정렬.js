let input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n")

let array = input.slice(1)
let newArr = array.map(x => x.split(" "))


let result = newArr.sort((a, b)=> {
    if (Number(a[0]) < Number(b[0]))
        return a[0] - b[0]
} )

let answer = result.map(([a, b]) => `${a} ${b}`).join('\n')

console.log(answer)