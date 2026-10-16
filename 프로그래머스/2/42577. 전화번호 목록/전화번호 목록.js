function solution(phone_book) {
    const set = new Set(phone_book) // "119", "111", "1194"

    for(const phone_num of phone_book){
        for(let i=1; i<phone_num.length; i++){
            if(set.has(phone_num.slice(0,i))) return false;
        }
    }
        return true; 
}
    