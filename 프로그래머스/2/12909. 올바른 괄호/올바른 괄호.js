function solution(s){
    let stack = [];
    for(const parse of s){
            if(parse === '('){
                stack.push(parse) // (
            } else {
                if(stack.length>0)
                    stack.pop() // 
                else{
                    return false;
                    break;
                }
            }
        }
    return stack.length === 0 ? true : false
}