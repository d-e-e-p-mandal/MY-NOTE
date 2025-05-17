#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = nullptr;
    }
};

// Stack class
class Stack {
private:
    Node* topNode;

public:
    Stack() {
        topNode = nullptr;
    }

    // Push operation
    void push(int data) {
        Node* newNode = new Node(data);
        newNode->next = topNode;
        topNode = newNode;
    }

    // Pop operation
    int pop() {
        if (isEmpty()) {
            cout << "Underflow: Stack is empty" << endl;
            return -1;
        }

        int popped = topNode->data;
        Node* temp = topNode;
        topNode = topNode->next;
        delete temp;
        return popped;
    }

    // Top operation
    int top() {
        if (isEmpty()) {
            cout << "Stack is empty" << endl;
            return -1;
        }
        return topNode->data;
    }

    // Check if stack is empty
    bool isEmpty() {
        return topNode == nullptr;
    }

    // Display stack contents
    void display() {
        if (isEmpty()) {
            cout << "Stack is empty" << endl;
            return;
        }

        Node* temp = topNode;
        cout << "Stack (top to bottom): ";
        while (temp != nullptr) {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;
    }

    // Destructor to clean up memory
    ~Stack() {
        while (!isEmpty()) {
            pop();
        }
    }
};

// Example usage
int main() {
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);

    s.display();                 // 30 20 10

    cout << "Top: " << s.top() << endl;        // 30
    cout << "Popped: " << s.pop() << endl;     // 30

    s.display();                 // 20 10
    cout << "Is empty? " << (s.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}