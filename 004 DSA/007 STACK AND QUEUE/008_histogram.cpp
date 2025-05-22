#include<bits/stdc++.h>
using namespace std;
int largestArea(vector<int>&heights){
    stack<int>s;
    int n = heights.size();
    int leftMin[n];
    int rightMin[n];

    //left arraay
    for(int i=0; i<n; i++){
        while(!s.empty() && heights[i] <= heights[s.top()]){
            s.pop();
        }

        if(s.empty())
            leftMin[i] = 0;
        else
            leftMin[i] = s.top() + 1;
        
        s.push(i);
    }
    //for re-using stack
    while(!s.empty()){
        s.pop();
    }

    for(int i=n-1; i>=0; i--){
        while (!s.empty() && heights[i] <= heights[s.top()]){
            s.pop();
        }
        
        if(s.empty())
            rightMin[i] = n;
        else
            rightMin[i] = s.top() - 1;

        s.push(i);
    }
    
    int maxArea = 0;
    for(int i=0; i<n; i++){
        maxArea = max(maxArea,heights[i]*(rightMin[i] - leftMin[i] + 1));
    }

    return maxArea;
    
}
int main(){
    vector<int> heights{6, 0, 5, 4, 5, 0, 6};
    cout<<"MaximumArea : "<< largestArea(heights)<<endl;
    return 0;
}