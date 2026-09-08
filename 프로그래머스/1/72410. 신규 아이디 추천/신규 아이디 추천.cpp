#include <string>
#include <vector>

using namespace std;

string solution(string new_id) {
    // 1. 소문자 치환 
    for (char& c : new_id ) c = tolower(c);
    // 2. 알파벳 소문자, 숫자, -, _, . 제외 모든 문자 제거 
    string tmp;
    for(char& c : new_id) 
        if ( 'a'<= c && c<='z' || isdigit(c) || c == '-' || c=='_' || c=='.')
            tmp += c;
    new_id = tmp;
    // 3. 마침표 2번은 하나로 
    string tmp2 = "";
    for (char c : new_id){
        if( c == '.' && !tmp2.empty() && tmp2.back() == '.') continue;
        tmp2 +=c;
    }
    new_id = tmp2;
    // 4. 처음이나 끝에 마침표는 제거
    if (!new_id.empty() && new_id.front() == '.') new_id.erase(0, 1);
    if (!new_id.empty() && new_id.back() == '.') new_id.pop_back();
    // 5. 빈 문자열이면 a 대입
    if (new_id.empty()) new_id += 'a';
    // 6. 길이 16자 이상일 지 처음 15개만 
    if (new_id.length() >= 16)
        new_id.erase(15,new_id.length());
    if (!new_id.empty() && new_id.back() == '.') new_id.pop_back();
    // 7. 최소 길이 3 
    if (new_id.length() <=2)
        while(new_id.length() < 3)
                new_id += new_id.back();
    return new_id;
}