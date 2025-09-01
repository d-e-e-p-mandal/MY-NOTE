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

// Function to get height of tree
int height(Node* root) {
    if (root == nullptr) return 0;
    return 1 + max(height(root->left), height(root->right));
}

// Print nodes at a given level
void printLevel(Node* root, int level) {
    if (root == nullptr) return;
    if (level == 1) cout << root->data << " ";
    else {
        printLevel(root->left, level - 1);
        printLevel(root->right, level - 1);
    }
}

// BFS using recursion
void bfs(Node* root) {
    int h = height(root);
    for (int i = 1; i <= h; i++) {
        printLevel(root, i);
        cout << endl;
    }
}

int main() {
    // Tree:
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

    cout << "BFS (Level Order Traversal):" << endl;
    bfs(root);

    return 0;
}

/*
OUTPUT:
BFS (Level Order Traversal):
1 
2 3 
4 5 6 

• Time Complexity: O(n^2) in worst case (for skewed tree).
• Space Complexity: O(h) recursion stack, h = height.
*/