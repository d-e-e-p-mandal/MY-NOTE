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

void inorder(Node* root) {
    if (root == nullptr) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

void preorder(Node* root) {
    if (root == nullptr) return;
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}

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
    cout << "Inorder Traversal: ";
    inorder(root);     // Output: 4 2 5 1 3 6
    cout << "\nPreorder Traversal: ";
    preorder(root);    // Output: 1 2 4 5 3 6
    cout << "\nPostorder Traversal: ";
    postorder(root);   // Output: 4 5 2 6 3 1
    cout << endl;

    return 0;
}

/*Inorder Traversal:   4 2 5 1 3 6  
Preorder Traversal:    1 2 4 5 3 6  
Postorder Traversal:   4 5 2 6 3 1*/

/*	•	Time: O(n) for all three (visit every node)
	•	Space: O(h) where h is height (due to recursion stack)*/