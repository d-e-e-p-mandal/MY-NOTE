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
    if(root == NULL) return;

    stack<Node*> st;
    Node* curr = root;

    while(curr != NULL || !st.empty()) {
        // Go as left as possible
        while(curr != NULL) {
            st.push(curr);
            curr = curr->left;
        }

        // Process top of stack
        curr = st.top();
        st.pop();

        cout << curr->data << " ";

        // Move to right subtree
        curr = curr->right;
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
    cout << "Inorder Traversal: ";
    inorder(root);     // Output: 4 2 5 1 3 6
    cout << endl;

    return 0;
}

//Inorder Traversal:   4 2 5 1 3 6  


/*	•	Time: O(n) for all three (visit every node)
	•	Space: O(h) where h is height (due to recursion stack)*/