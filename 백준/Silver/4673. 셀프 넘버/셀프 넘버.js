function dfunc(n) {
    const str = String(n);
    const newArr = Array.from(str); // "12" => [ "1", "2"]

    let sum = 0;

    for(let value of newArr) {
        sum += Number(value)
    }

    return sum + n; // 12 + 1 + 2

}

let dArr = [];

for(let value = 1; value <=10000; value++){
    if (dfunc(value) <= 10000){
        dArr.push(dfunc(value))
    }
}

let compareArr = [...new Array(10000)].map((_,i) => i+1);

let difference = compareArr.filter(x => !dArr.includes(x))

for (let value of difference){
    console.log(value)
}