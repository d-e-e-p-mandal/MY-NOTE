// Basic Linked List : Constructor : Using Struct
#include<bits/stdc++.h>
using namespace std;
struct Node{
    int data;
    Node *next; // struct Node *next;
    
    //constructor
    Node(int val){
        data = val;
        next = nullptr; // next = NULL; 
    }

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