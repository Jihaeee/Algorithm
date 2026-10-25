function solution(n) {
    let queen = []; // queen[row] = col; 
    
    let answer = 0;
    
    function canPlace(row, col){
       for(let r=0;r<row;r++){
           if(queen[r] === col || Math.abs(row-r) === Math.abs(col-queen[r])) return false;
       }
        return true;
    }
        
    function dfs(row){
        if(row === n){
            answer++;
            return;
        }
        for(let i=0;i<n;i++){
            if(canPlace(row,i)) {
                queen[row] = i
                dfs(row+1);
        }            
    }
}
    dfs(0)
        return answer;
}