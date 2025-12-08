let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

let arr = input.splice(1)
let currentState = new Map();
let enterArr = [];

arr.forEach(record => {
    const [name, state ] = record.split(" ");
    currentState.set(name, state);
})

for (const [name, state] of currentState.entries()){
    if (state === 'enter')
        enterArr.push(name)

}

enterArr.sort().reverse().forEach(name => console.log(name))