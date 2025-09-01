#include <iostream>
using namespace std;

// Define the structure of a tree node
struct Node {
    int data;
    Node* left;
    Node* right;

    // Constructor
    Node(int val) {
        data = val;
        left = right = nullptr;
    }
};

// Function to print Inorder traversal
void inorder(Node* root) {
    if (root == nullptr) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

int main() {
    // Manually creating the tree:
    //         1
    //        / \
    //       2   3
    //      / \   \
    //     4   5   6

    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);

    root->left->left = new Node(4);
    root->left->right = new Node(5);

    root->right->right = new Node(6);

    // Display Inorder traversal
    cout << "Inorder Traversal: ";
    inorder(root);  // Output should be 4 2 5 1 3 6
    cout << endl;

    return 0;
}