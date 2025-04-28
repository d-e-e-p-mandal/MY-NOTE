#include<bits/stdc++.h>
using namespace std;

void subsequence(int arr[], int n, vector<int>& sb, int index) {
    if (index < 0) {
        if (sb.empty()) {
            cout << "{}";
        } else {
            for (auto it : sb) {
                cout << it << " ";
            }
        }
        cout << endl;
        return;
    }

    // Include the current element
    sb.push_back(arr[index]);
    subsequence(arr, n, sb, index - 1);

    // Exclude the current element (backtrack)
    sb.pop_back();
    subsequence(arr, n, sb, index - 1);
}

int main() {
    int arr[] = {1, 2, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    vector<int> sb;

    subsequence(arr, n, sb, n - 1);
    return 0;
}