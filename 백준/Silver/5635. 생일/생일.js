let input = require('fs').readFileSync(0,"utf8").toString().trim().split("\n")

const studentNum = Number(input[0])

let students = input.slice(1).map(line =>{
    const [name, d, m, y] = line.split(" ");
    return [name, Number(d), Number(m), Number(y)];
})

students.sort((a,b) => {
    if (a[3] !== b[3]) return a[3] - b[3];
    if (a[2] !== b[2]) return a[2] - b[2];
    return a[1] - b[1]
})

console.log(students[studentNum - 1][0]);
console.log(students[0][0]);
