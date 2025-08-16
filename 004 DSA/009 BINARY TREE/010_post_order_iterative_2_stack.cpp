// Tree : Post Order : Using 2 stack
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int val) {
        data = val;
        left = right = nullptr;
    }
};

void postorder(Node* root) {
    if(root == nullptr) return;

    stack<Node*> st1, st2;

    st1.push(root);

    // First pass: push nodes to st1, move them to st2 (root → right → left)
    while(!st1.empty()) {
        Node* curr = st1.top();
        st1.pop();
        st2.push(curr);

        if(curr->left) st1.push(curr->left);
        if(curr->right) st1.push(curr->right);
    }

    // Second pass: pop from st2 to get left → right → root (postorder)
    while(!st2.empty()) {
        cout << st2.top()->data << " ";
        st2.pop();
    }
}

int main() {
    // Constructing the tree
    /*  1
       / \
      2   3
     / \   \
    4   5   6 */
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);

    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->right = new Node(6);

    // DFS Traversals
    cout << "\nPostorder Traversal: ";
    postorder(root); 
    cout << endl;

    return 0;
}


// Postorder Traversal:   4 5 2 6 3 1

/*	•	Time: O(n) for all three (visit every node)
	•	Space: O(h) where h is height (due to recursion stack)*/
