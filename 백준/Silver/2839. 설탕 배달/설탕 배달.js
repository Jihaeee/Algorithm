let N = Number(require('fs').readFileSync(0, "utf8").toString().trim())

let count = 0;

while( N >= 0 ){
    if (N % 5 == 0){
        count += N/5
        console.log(count)
        return;
    } else {
        N -= 3 
        count++;
    }
}


console.log(-1);