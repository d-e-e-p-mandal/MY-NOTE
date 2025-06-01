// Infix to Postfix :
#include<bits/stdc++.h>
using namespace std;
int lavel(char ch){
    if(ch == '^') return 3;
    if(ch == '/' || ch == '*') return 2;
    if(ch == '-' || ch == '+') return 1;
    return -1;
}
string infixToPostfix(string exp){
    stack<char>st;
    string ans;

    for(int i=0; i<exp.length(); i++){
        char c = exp[i];

        if((c >= 'A' && c <='Z') || (c >= 'a' && c<='z') || (c >= '0' && c <= '9')) {
            ans += c;
        }
        else if(c == '(')
            st.push(c);
        else if(c == ')'){
            while(!st.empty() && st.top() != '('){
                ans += st.top();
                st.pop();
            }
            st.pop();
        }
        else {
            while(!st.empty() && lavel(c) <=lavel(st.top())){
                ans += st.top();
                st.pop();
            }
            st.push(c);
        }
    }

    while (!st.empty()){
        ans += st.top();
        st.pop();
    }

    return ans;
    
}
int main(){
    string exp = "a+b*(c^d-e)^(f+g*h)-i";

    cout<<"Infix to Postfix : "<<infixToPostfix(exp)<<endl;
    return 0;
}

/*OUTPUT : Infix to Postfix : abcd^e-fgh*+^*+i-  */