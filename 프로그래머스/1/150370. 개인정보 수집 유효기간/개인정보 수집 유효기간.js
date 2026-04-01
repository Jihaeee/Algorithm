function solution(today, terms, privacies) {
    const result = [];
    const [tY, tM, tD] = today.split(".").map(Number);
    const totalDay = tY*12*28 + tM*28 + tD
    
    const termMap = {};
    terms.forEach(line => {
        const [type, month] = line.split(" ");
        termMap[type] = Number(month) * 28; 
    });
    
    privacies.forEach((line, index) => {
        const [fullDate, type] = line.split(" ");
        const [y, m, d] = fullDate.split(".").map(Number);
        
        const expiryTotal = (y * 12 * 28) + (m * 28) + d + termMap[type];
        
        if (totalDay >= expiryTotal) {
            result.push(index + 1);
    };
    });
    
    
    
    

    return result
}