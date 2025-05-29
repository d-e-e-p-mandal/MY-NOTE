// Queue implementation using two stack
#include<bits/stdc++.h>
using namespace std;

class Queue{
    public :
    stack<int>s1,s2;
    void enqueue(int data){ 
        while(!s1.empty()){
            s2.push(s1.top());
            s1.pop();
        }

        s1.push(data);
        while(!s2.empty()){
            s1.push(s2.top());
            s2.pop();
        }
    }

    int dequeue(){
        if(s1.empty()){ 
            cout<<"Queue is empty....."<<endl;
            return 0;
        }
        int val = s1.top();
        s1.pop();
        return val;
    }

    int top(){
        if(s1.empty()){
            cout<<"Queue is empty."<<endl;
        }

        return s1.top();
    }

    int size(){
        return s1.size();
    }

  
};
int main(){
    Queue q;  
    q.enqueue(3);
    q.enqueue(4);
    cout << "The element poped is " << q.dequeue() << endl;
    q.enqueue(5);
    q.enqueue(9);
    cout << "The top of the queue is " << q.top() << endl;
    cout << "The size of the queue is " << q.size() << endl;
    return 0;
}
