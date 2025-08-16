#include<bits/stdc++.h>
using namespace std;
int main(){
    
    return 0;
}
class Solution {
public:
    int maximum69Number (int num) {
        // Convert to string, flip first '6' to '9'
        string s = to_string(num);
        for (char &c : s) {
            if (c == '6') { c = '9'; break; }
        }
        return stoi(s);
    }
};