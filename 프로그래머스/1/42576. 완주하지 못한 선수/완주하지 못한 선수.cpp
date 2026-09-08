#include <string>
#include <vector>
#include <bits/stdc++.h>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
	unordered_map<string, int> m;
    
    // 값을 돌면서 키에 해당하는 participant는 넣고 completion은 빼서 남아있는 키를 반환한다.
   	for (string name: participant){
        m[name]++;
    }
    
    for(string name: completion){
        m[name]--;
    }
    
    for (auto& [name, cnt] : m){
        if (cnt>0){
            return name;
        }
    }

}