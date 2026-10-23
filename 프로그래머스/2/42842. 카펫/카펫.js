function solution(brown, yellow) {
    for (let yh = 1; yh * yh <= yellow; yh++) {
        if(yellow % yh === 0) {
            const yw = yellow/yh
            if(2*(yh+yw) +4 === brown) return [yw+2, yh+2]
        }
    }
}