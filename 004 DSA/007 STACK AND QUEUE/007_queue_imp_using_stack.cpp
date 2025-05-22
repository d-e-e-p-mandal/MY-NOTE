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



/*
#include <bits/stdc++.h>

using namespace std;

struct Queue {
  stack < int > input, output;
  
  // Push elements in queue
  void Push(int data) {
    // Pop out all elements from the stack input
    while (!input.empty()) {
      output.push(input.top());
      input.pop();
    }
    // Insert the desired element in the stack input
    cout << "The element pushed is " << data << endl;
    input.push(data);
    // Pop out elements from the stack output and push them into the stack input
    while (!output.empty()) {
      input.push(output.top());
      output.pop();
    }
  }
  // Pop the element from the Queue
  int Pop() {
    if (input.empty()) {
      cout << "Stack is empty";
      exit(0);
    }
    int val = input.top();
    input.pop();
    return val;
  }
  // Return the Topmost element from the Queue
  int Top() {
    if (input.empty()) {
      cout << "Stack is empty";
      exit(0);
    }
    return input.top();
  }
  // Return the size of the Queue
  int size() {
    return input.size();
  }
};
int main() {
  Queue q;
  q.Push(3);
  q.Push(4);
  cout << "The element poped is " << q.Pop() << endl;
  q.Push(5);
  cout << "The top of the queue is " << q.Top() << endl;
  cout << "The size of the queue is " << q.size() << endl;
}
*/