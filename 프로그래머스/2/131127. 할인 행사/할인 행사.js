function solution(want, number, discount) {
    let answer = 0;

    for (let i = 0; i < discount.length - 9; i++) {

        const days = discount.slice(i, i + 10);

        const map = new Map();
        for (const item of days) {
            map.set(item, (map.get(item) || 0) + 1);
        }

        let ok = true;
        for (let j = 0; j < want.length; j++) {
            if (number[j] > (map.get(want[j]) || 0)) {
                ok = false;
                break;  
            }
        }

        // 전부 충분하면 성공
        if (ok) answer++;
    }

    return answer;
}