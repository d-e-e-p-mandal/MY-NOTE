#include <bits/stdc++.h>
using namespace std;

int largestArea(vector<int>& heights) {
    stack<int> st;
    int maxA = 0;
    int n = heights.size();

    for (int i = 0; i <= n; i++) {
        // Treat i == n as height 0 to flush stack at the end
        int currHeight = (i == n) ? 0 : heights[i];

        while (!st.empty() && currHeight < heights[st.top()]) {
            int height = heights[st.top()];
            st.pop();
            int width = st.empty() ? i : i - st.top() - 1;
            maxA = max(maxA, width * height);
        }

        st.push(i);
    }

    return maxA;
}

int main() {
    vector<int> heights{6, 0, 5, 4, 5, 0, 6};
    cout << "MaximumArea : " << largestArea(heights) << endl;
    return 0;
}