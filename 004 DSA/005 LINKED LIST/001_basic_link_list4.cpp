#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int val) : data(val), next(nullptr) {}
    Node(int val, Node* address) : data(val), next(address) {}
};

class LinkedList {
    Node head;
public:
    LinkedList(int val) : head(val) {}

    void insertAtFront(int val) {
        head = Node(val, &head);
    }

    void display() {
        Node* current = &head;
        while (current != nullptr) {
            cout << current->data << " ";
            current = current->next;
        }
        cout << endl;
    }
};

int main() {
    LinkedList list(10);
    list.insertAtFront(20);
    list.insertAtFront(30);

    list.display();  // Output: 30 20 10
    return 0;
}