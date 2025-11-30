const fs = require('fs');
const input = fs.readFileSync( 0, 'utf8').toString();

const number = Number(input);

function factorial(number) {

    if (number == 0) {
        return 1;
    }
    else {
        return number * factorial(number -1)
        }
}

console.log(factorial(number));