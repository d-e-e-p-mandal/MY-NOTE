#include<bits/stdc++.h>
using namespace std;
int largestArea(vector<int>&heights){
    stack<int> st;
    int maxA = 0;
    for(int i=0; i<heights.size(); i++){
        int height =heights[i];
        int width = i - ((i==0)? 0 : st.top()) + 1;
        maxA = max(maxA,width*height);

        while(!st.empty() && heights[i] < heights[st.top()])
            st.pop();

        st.push(i);
    }
    return maxA;
}
int main(){
    vector<int> heights{6, 0, 5, 4, 5, 0, 6};
    cout<<"MaximumArea : "<< largestArea(heights)<<endl;
    return 0;
}
/*OUTPUT : MaximumArea : 12*/