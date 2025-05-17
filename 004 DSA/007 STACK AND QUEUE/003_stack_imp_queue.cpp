#include<bits/stdc++.h>
using namespace std;
class Stack{
    public :
    queue <int> q1,q2;

    void push(int data){
        q2.push(data);

        while(!q1.empty()){
            q2.push(q1.front());
            q1.pop();
        }
        swap(q1,q2);
    }

    int pop(){
        if(q1.empty()){
            cout<<"underflow"<<endl;
            return 0;
        }
        int popped = q1.front();
        q1.pop();
        return popped;
    }

    int peek(){
        return q1.front();
    }

};

int main(){

    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    s.push(40);

    //display
    

    int x =s.pop();
    cout<<x<<endl;

    cout<<s.peek()<<endl;

    
}