function solution(friends, gifts) {
    const k = friends.length
    const count = Array.from({length: k}, () => Array(k).fill(0)) // 주고 받은 선물 표
    
    const giftIndex = Array(k).fill(0) // 선물지수 
    const num = Array(k).fill(0) // 받을 선물 
    // 1. 선물 지수 계산
    for(const g of gifts){
        const [from,to] = g.split(" ")
        count[friends.indexOf(from)][friends.indexOf(to)] +=1;
        giftIndex[friends.indexOf(from)]++;
        giftIndex[friends.indexOf(to)]--;
    }

    for(let i=0;i<k;i++){
        for(let j=0; j<k;j++){
            
            if(i===j) continue;
            // 2. 두 사람의 기록이 있을 때 
            if(count[i][j] !== count[j][i]) {
                if(count[i][j] - count[j][i] > 0) num[i]++
            } else {
                if (giftIndex[i] > giftIndex[j]) num[i]++;
            }
                
        }
    }
    return Math.max(...num)

    }