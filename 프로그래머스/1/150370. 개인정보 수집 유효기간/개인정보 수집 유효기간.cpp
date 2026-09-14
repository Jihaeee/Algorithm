#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

// "YYYY.MM.DD"
vector<int> solution(string today, vector<string> terms, vector<string> privacies) {
    // 해시 사용 
    unordered_map<char, int> t;
    for (string& s : terms) {
        char type = s[0];
        int month = stoi(s.substr(2));
        
        t[type] = month;
    }
    int todayYear = stoi(today.substr(0, 4));
    int todayMonth = stoi(today.substr(5, 2));
    int todayDay = stoi(today.substr(8, 2));
    
    int todayDays = todayYear * 12 * 28
                  + todayMonth * 28
                  + todayDay;
    
    vector<int> answer;
    
    for (int i = 0; i < privacies.size(); i++) {

        string startDate = privacies[i].substr(0, 10);
        char type = privacies[i][11];

        // 수집 날짜를 일수로 변환
        int year = stoi(startDate.substr(0, 4));
        int month = stoi(startDate.substr(5, 2));
        int day = stoi(startDate.substr(8, 2));

        int startDays = year * 12 * 28
                      + month * 28
                      + day;
        
        int expiration = startDays + t[type] * 28;
        
        if (expiration <= todayDays) {
            answer.push_back(i + 1);
        }
    }



    return answer;
}