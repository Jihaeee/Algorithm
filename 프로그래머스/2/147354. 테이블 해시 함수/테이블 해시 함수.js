function solution(data, col, row_begin, row_end) {
    data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);

    let answer = 0;
    for (let i = row_begin; i <= row_end; i++) {
        let sum = 0;                   
        for (const v of data[i - 1]) {  
            sum += v % i;
        }
        answer ^= sum;
    }
    return answer;                 
}