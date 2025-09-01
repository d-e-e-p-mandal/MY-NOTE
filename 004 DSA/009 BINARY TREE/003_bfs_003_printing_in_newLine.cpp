// Level Traversal : Printing new Line

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

// Function for BFS / Level Order Traversal (with new line)
void bfs(Node* root) {
    if (root == nullptr) return;

    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
        int size = q.size();  // number of nodes in this level

        while (size--) {
            Node* current = q.front();
            q.pop();

            cout << current->data << " ";

            if (current->left != nullptr)
                q.push(current->left);

            if (current->right != nullptr)
                q.push(current->right);
        }
        cout << endl; // new line after finishing one level
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

    // Perform BFS
    cout << "BFS (Level Order Traversal):" << endl;
    bfs(root);

    return 0;
}

/*
OUTPUT :
BFS (Level Order Traversal):
1 
2 3 
4 5 6 

• Time Complexity: O(n) – where n is the number of nodes.
• Space Complexity: O(n) – for the queue used in BFS.
*/