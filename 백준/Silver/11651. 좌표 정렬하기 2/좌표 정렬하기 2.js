let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

let position = input.slice(1)

const arr = position.map(x => x.split(" ").map(Number))

let sortArr = arr.sort((a, b) => {
    if (a[1] < b[1])
        return a[1] - b[1]
    if (a[1] == b[1])
        return a[0] - b[0]
}
)

console.log(sortArr.map(([a,b]) => `${a} ${b}`).join("\n"))