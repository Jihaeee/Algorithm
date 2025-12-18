const fs = require('fs')
const [_, ...infos] = fs
    .readFileSync(0, "utf8")
    .toString()
    .trim()
    .split("\n")

const students = infos.map(line => {
    const [name, kor, eng, math] = line.split(" ")
    return [name, Number(kor), Number(eng), Number(math)];
});

students.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    if (a[2] !== b[2]) return a[2] - b[2];
    if (a[3] !== b[3]) return b[3] - a[3];
    return (a[0] > b[0] ? 1 : -1 )
})

let answer = students.map(value => value[0])
console.log(answer.join("\n"))
