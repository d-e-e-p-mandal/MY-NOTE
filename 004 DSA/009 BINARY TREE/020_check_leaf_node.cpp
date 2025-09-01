#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

bool isLeaf(TreeNode* node) {
    return (node != nullptr && node->left == nullptr && node->right == nullptr);
}

int main() {
    TreeNode* root = new TreeNode(10);
    root->left = new TreeNode(20);
    root->right = new TreeNode(30);
    root->left->left = new TreeNode(40);

    cout << "Is root a leaf? " << (isLeaf(root) ? "Yes" : "No") << endl;
    cout << "Is root->right a leaf? " << (isLeaf(root->right) ? "Yes" : "No") << endl;
    cout << "Is root->left->left a leaf? " << (isLeaf(root->left->left) ? "Yes" : "No") << endl;

    // Output:
    // Is root a leaf? No
    // Is root->right a leaf? Yes
    // Is root->left->left a leaf? Yes

    return 0;
}