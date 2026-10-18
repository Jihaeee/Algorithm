function solution(places) {
    const answer = [];

    for (const place of places) {      
        let ok = true;

        const is = (r, c, ch) =>
            r >= 0 && r < 5 && c >= 0 && c < 5 && place[r][c] === ch;

        for (let i = 0; i < 5 && ok; i++) {
            for (let j = 0; j < 5 && ok; j++) {
                if (place[i][j] !== "P") continue;

                // 1. 거리 1
                const d1 = [[-1, 0], [1, 0], [0, -1], [0, 1]];
                for (const [dr, dc] of d1) {
                    if (is(i + dr, j + dc, "P")) ok = false;
                }

                // 2. 거리 2 직선
                for (const [dr, dc] of d1) {
                    if (is(i + dr * 2, j + dc * 2, "P") &&
                        !is(i + dr, j + dc, "X")) {
                        ok = false;
                    }
                }

                // 3. 대각선
                const diag = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
                for (const [dr, dc] of diag) {
                    if (is(i + dr, j + dc, "P") &&
                        (!is(i + dr, j, "X") || !is(i, j + dc, "X"))) {
                        ok = false;
                    }
                }
            }
        }

        answer.push(ok ? 1 : 0);
    }

    return answer;
}