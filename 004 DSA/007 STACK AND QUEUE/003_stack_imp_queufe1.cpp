// using one queue
#include <bits/stdc++.h>
using namespace std;
class Stack{
public:
    queue<int> q;
    int size;
    void push(int data){
        q.push(data);
        int x = q.size();

        for (int i = 1; i < x; i++)
        {
            int popped = q.front();
            q.pop();
            q.push(popped);
        }
    }
    int pop(){
        if (q.empty()){
            cout << "underflow" << endl;
            return 0;
        }
        int popped = q.front();
        q.pop();
        return popped;
    }

    int peek(){
        return q.front();
    }
};

int main(){
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    s.push(40);

    // display
    cout << s.peek() << endl;
    int x = s.pop();
    cout << x << endl;

    cout << s.peek() << endl;

    return 0;
}