#include <string>
#include <vector>

using namespace std;

// -2 기준으로 반복문으로 돌려서 0이 되는 숫자를 만족하는게 나머지 배열에 있는지 찾기? 

int solution(vector<int> number) {
    int count = 0;
    for(int i=0;i<number.size() -2 ; i++){
        for(int j=i+1; j<number.size()-1;j++){
            int total = 0;
            total = number[i] + number[j];
        for(int k=j+1; k<number.size() ; k++){
            if(-total == number[k])
                count++;
        }
        }
        
    }
    return count;
}