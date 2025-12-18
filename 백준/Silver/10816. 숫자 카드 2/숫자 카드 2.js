const { count } = require('console');
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const cards = input[1].split(' ').map(Number);

const M = Number(input[2]);
const queries = input[3].split(' ').map(Number);

const countMap = new Map();

for (let card of cards){
    countMap.set(card, (countMap.get(card) || 0) +1)
}

const result = [];
for(let q of queries){
    result.push(countMap.get(q) || 0)
}

console.log(result.join(" "))