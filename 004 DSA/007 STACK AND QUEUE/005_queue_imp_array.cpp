// Queue implementation using array
#include<bits/stdc++.h>
using namespace std;

class Queue{
    public :
    int *arr;
    int size = 0 ;
    int front = -1,rear = -1;
    int capacity;

    //constractor
    Queue(){
        arr = new int[size];
    }
    void push(int data){
        if(capacity == size){
            cout<<"Overflow"<<endl;
            return;
        }
        rear = (rear + 1)%capacity;
        arr[rear] = data; 
        size++;
    }

    int pop(){
        int popped = arr[front++];
        size--;

    }

};

int main(){
    Queue q;
    q.push(10);
    q.push(20);
    q.push(30);
    q.push(40);

    cout<<""<<endl;
    return 0;
}