#include <iostream>
#include <stack>
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

void dfsPreorder(Node* root) {
    if (root == nullptr) return;

    stack<Node*> st;
    st.push(root);

    while (!st.empty()) {
        Node* current = st.top();
        st.pop();

        cout << current->data << " ";

        // Push right first so that left is processed first
        if (current->right)
            st.push(current->right);
        if (current->left)
            st.push(current->left);
    }
}

int main() {
    // Same tree:
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

    cout << "DFS (Preorder) using Stack: ";
    dfsPreorder(root);  // Output: 1 2 4 5 3 6
    cout << endl;

    return 0;
}

/*DFS (Preorder) using Stack: 1 2 4 5 3 6*/

/*🔹 Time & Space Complexity
	•	Time: O(n) (visit each node once)
	•	Space: O(h) where h is the height of the tree (stack size)*/