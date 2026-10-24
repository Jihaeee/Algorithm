function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    const lastTime = attacks[attacks.length - 1][0];
    let maxHp = health;
    let combo = 0;
    let idx = 0;

    for (let i = 1; i <= lastTime; i++) {
        const [time, attack] = attacks[idx];

        if (i === time) {
            combo = 0;
            health -= attack;
            idx++;
            if (health <= 0) return -1;
            continue;
        } else {
            combo++;
            health += x;
            if (combo === t) {
                health += y;
                combo = 0;
            }
            health = Math.min(health, maxHp);
        }
    }
    return health;
}