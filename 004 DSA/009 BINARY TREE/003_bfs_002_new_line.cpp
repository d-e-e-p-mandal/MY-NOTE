#include <iostream>
#include <queue>
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

// BFS / Level Order Traversal with NULL markers
void bfs(Node* root) {
    if (root == nullptr) return;

    queue<Node*> q;
    q.push(root);
    q.push(NULL);  // marker for end of first level

    while (!q.empty()) {
        Node* current = q.front();
        q.pop();

        if (current == NULL) {
            cout << endl;  // level ended
            if (!q.empty()) {
                q.push(NULL); // add marker for next level
            }
        } else {
            cout << current->data << " ";
            if (current->left) q.push(current->left);
            if (current->right) q.push(current->right);
        }
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

• Time Complexity: O(n) – visit each node once.
• Space Complexity: O(n) – queue + NULL markers.
*/