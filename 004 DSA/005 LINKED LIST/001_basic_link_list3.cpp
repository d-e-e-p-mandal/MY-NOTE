// Basic Linked List : Constructor : Using Struct
#include<bits/stdc++.h>
using namespace std;
class Node{   // change name struct to class of 1
    public: 
    int data;
    Node *next; // struct Node *next;
    
    public:
    //constructor
    Node(int val){
        data = val;
        next = nullptr; // next = NULL; 
    }

    public:
    Node(int val, struct Node *address){
        data = val;
        next = address;
    }
};

int main(){
    
    Node *head= new Node(10);   // struct Node *head = new struct Node(10);
    Node *temp= new Node(20,head);
    head = temp;

    cout<< head->data <<endl;
    cout<< (*head).data <<endl;

    cout<< head->next->data<<endl;  
    return 0;
}