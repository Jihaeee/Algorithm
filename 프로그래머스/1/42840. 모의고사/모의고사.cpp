#include <string>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> solution(vector<int> answers) {
    vector<int> a = {1, 2, 3, 4, 5};
    vector<int> answer;
    
    int scoreA = 0;
    int scoreB = 0;
    int scoreC = 0;

    for (int i = 0; i < answers.size(); i++) {
        if (answers[i] == a[i % 5]) {
            scoreA++;
    }
}
    vector<int> b = {2,1,2,3,2,4,2,5};
    for (int i = 0; i < answers.size(); i++) {
        if (answers[i] == b[i % 8]) {
            scoreB++;
    }
}
    vector<int> c = {3,3,1,1,2,2,4,4,5,5};
    for (int i = 0; i < answers.size(); i++) {
        if (answers[i] == c[i % 10]) {
            scoreC++;
        }
    }
    int maxScore = max({scoreA, scoreB, scoreC});
    if (maxScore == scoreA){
        answer.push_back(1);
    }
    if( maxScore== scoreB){
        answer.push_back(2);
    }
    if(maxScore == scoreC){
        answer.push_back(3);
    }

    return answer;
}