#include <string>
#include <vector>
#include <bits/stdc++.h>

using namespace std;

string solution(string s) {
    // 1. 공백이 있으면 숫자 초기화
    int count = 0;
    
    for(int i=0; i<s.length() ; i++){
        if (s[i] == ' ') {// s가 공백을 만나면 초기화 
            count = 0;
        }
        
        else{ // s가 공백을 만나지 않으면
            if(count % 2 ==0){
                s[i] = toupper(s[i]);
            }
            else{
                s[i] = tolower(s[i]);
            }
            count++;
        }    
    }
    
    return s;
}