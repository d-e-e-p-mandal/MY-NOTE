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
    if (root == nullptr) return;
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
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
    postorder(root);   // Output: 4 5 2 6 3 1
    cout << endl;

    return 0;
}


// Postorder Traversal:   4 5 2 6 3 1

/*	•	Time: O(n) for all three (visit every node)
	•	Space: O(h) where h is height (due to recursion stack)*/
