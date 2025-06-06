// Basic Linked List : Constructor : Using Struct and create object (don't) 
#include<bits/stdc++.h>
using namespace std;
struct Node{
    int data;
    struct Node *next;
    //constructor
    Node(int val){
        data = val;
        next = NULL;
    }

    Node(int val, struct Node *address){
        data = val;
        next = address;
    }
};

int main(){
    
    struct Node head(15);
    struct Node temp(30, &head);
   // head = temp;

    cout<< head.data <<endl;

    cout<< temp.next->data<<endl;
    cout<< (*temp.next).data<<endl;
      
    return 0;
}