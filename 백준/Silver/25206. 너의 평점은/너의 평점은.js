let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

let arr = input.map(x => x.split(" "))

// P등급 제외 
for (let i=0; i< arr.length; i++){
    if (arr[i][2] === 'P'){
        arr.splice(i, 1)
        i--; 
    }
}

let totalScore = 0;
let totalCourse= 0;
for (let i=0; i<arr.length; i++){
    if (arr[i][2] === 'A+') {
        arr[i][2] = 4.5
    }
    else if( arr[i][2] == 'A0'){
        arr[i][2] = 4.0
    }
    else if( arr[i][2] === 'B+'){
        arr[i][2] = 3.5
    }
    else if( arr[i][2] === 'B0'){
        arr[i][2] = 3.0
    }
    else if( arr[i][2] === 'C+'){
        arr[i][2] = 2.5
    }
    else if( arr[i][2] === 'C0'){
        arr[i][2] = 2.0
    }
    else if( arr[i][2] === 'D+'){
        arr[i][2] = 1.5
    }
    else if( arr[i][2] === 'D0'){
        arr[i][2] = 1.0
    }
    else if( arr[i][2] === 'F'){
        arr[i][2] = 0.0
    }

    totalScore +=Number(arr[i][1]) * arr[i][2]
    totalCourse += Number(arr[i][1])

}

console.log(totalScore/totalCourse)
