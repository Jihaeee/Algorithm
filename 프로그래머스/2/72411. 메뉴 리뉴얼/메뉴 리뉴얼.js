function solution(orders, course) {
    const answer = [];
    // 조합 만들기 
    function combine(s, k) {
        const result = [];

        function pick(start, cur) {
            if (cur.length === k) {        // k개 다 골랐을 때
                result.push(cur);          
                return;
            }
            for (let i = start; i < s.length; i++) {
                pick(i + 1, cur + s[i]);   // s[i]를 고르고, 그 뒤에서 이어서 고르기
            }
        }

    pick(0, "");
    return result;
}
    
    for (const k of course) {
        const map = new Map();
        for (const o of orders) {
            const sorted = [...o].sort().join("");
            for (const c of combine(sorted, k)) {
                map.set(c, (map.get(c) ||0)+1)
            }
        }
        const max = Math.max(0, ...map.values());   // 2. 다 센 뒤 최댓값
        if (max < 2) continue;                      // 2번 미만이면 코스 없음
        
        for (const [menu, cnt] of map) {
            if (cnt === max) answer.push(menu);     
        }
    }
    return answer.sort();
}