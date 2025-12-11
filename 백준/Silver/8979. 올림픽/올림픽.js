let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n").map(line => line.split(" ").map(Number))

const [ N, K ] = input[0] // N = 국가의 수, K = 등수를 알고 싶은 국가

const num = input.slice(1, 1+N)
let count = 1;

let country = null;

for(let j=0; j<num.length;j++){
    if (K === num[j][0]){
        country = num[j];
        break
    }
}

for(let i=0; i<num.length; i++){
    if (num[i][0] === K ) continue; 

    if (country[1] < num[i][1] ){ // 금메달의 수가 더 큰 국가가 있으면 count+1 
        count++;
    }
    else if (country[1] === num[i][1] ){ // 금메달의 수가 같다면
        if (country[2] < num[i][2] ){ // 은메달 수 비교해서 크면 +1
            count++;
        }
        else if (country[2] === num[i][2]){ // 같으면
            if (country[3] < num[i][3] ){ // 동메달 수 비교
                count++;
            }
    }
}
}

console.log(count)

