let input = require('fs').readFileSync(0, "utf8").toString().trim()

let arr = Array.from(input).map(Number) // [ 9, 9, 9, 9 ]

function arrCount(arr, num) {
    let count = 0;

    arr.map(item => {
        if (item === num) count++;
    });

    if (num === 6) {
        return Math.ceil(count / 2);  
    } else {
        return count;
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 9) {
        arr[i] = 6;
    }
}

let newArr = [];

for (let i = 0; i < 10; i++) {
    newArr.push(arrCount(arr, i));
}

console.log(Math.max(...newArr));
