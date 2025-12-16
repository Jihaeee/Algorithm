let N = Number(require('fs').readFileSync(0, "utf8").toString().trim())

let arr = Array.from({ length: N }, (_, i) => i + 1); // 1 2 3 4 5 6
let head = 0;

while(arr.length - head > 1){
    head++; // 1 2. 3 4 5 6 
    arr.push(arr[head]) // 1 2 3. 4 5 6 2
    head++; // 
}

console.log(arr[head])
