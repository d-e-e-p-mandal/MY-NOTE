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

void preorder(Node* root) {
    if (root == nullptr) return;
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
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
    cout << "\nPreorder Traversal: ";
    preorder(root);    // Output: 1 2 4 5 3 6
    cout << endl;

    return 0;
}


//Preorder Traversal:    1 2 4 5 3 6  

/*	•	Time: O(n) for all three (visit every node)
	•	Space: O(h) where h is height (due to recursion stack)*/