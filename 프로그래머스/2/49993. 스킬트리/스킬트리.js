function solution(skill, skill_trees) {
    // 인덱스 순서가 C < B < D 인지 확인 
    const skill_arr = [];
    for(const s of skill){
        skill_arr.push(s)
    }
    let count =0;
    
    for(const s of skill_trees){
        let s1 = "";
        for(let i=0;i<s.length;i++){
            if(skill_arr.includes(s[i])) s1+=s[i]
        }
        if(skill.startsWith(s1)) count++;
    }
    return count;
    
}