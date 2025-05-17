// Stack implementation using array
#include<bits/stdc++.h>
using namespace std;

class Stack{
    public :
    int *arr;
    int top = -1;
    int capacity;

    Stack(int s){
        capacity = s;
        arr = new int[capacity];
    }
    void push(int data){
        if(top == capacity - 1){
            cout<<"Overflow......."<<endl;
            return;
        }
        arr[++top] = data;
    }

    int pop(){
        if(top == -1){
            cout<<"Underflow"<<endl;
        }
        int x = arr[top];
        top--;
        return x;
    }

    int peek(){
        return arr[top];
    }

    int size(){
        return top+1;
    }

};


int main(){
    int n;
    cout<<"Enter capacity of stack : ";
    cin>>n;

    Stack s(n);
    s.push(10);
    s.push(20);
    s.push(30);
    s.push(40);
    

    //display
    for(int i=0; i<s.size(); i++){
        cout<<s.arr[i]<<endl;
    }

    int x =s.pop();
    cout<<x<<endl;

    for(int i=0; i<s.size(); i++){
        cout<<s.arr[i]<<endl;
    }


    return 0;
}