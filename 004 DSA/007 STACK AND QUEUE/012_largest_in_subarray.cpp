// Largest Number in a Subarray :
#include<bits/stdc++.h>
using namespace std;

void largestNumberSubarray(vector<int>&arr, int k){
    queue<int> q;
    vector<int>ans;

    for(int i=0; i<arr.size(); i++){

        while(!q.empty() && q.front() == i-k)
            q.pop();

        while(!q.empty() && arr[q.front()] < arr[i])
            q.pop();
        
        q.push(i);
        if(i>=k-1)ans.push_back(arr[q.front()]);
    }

    for(int i =0; i<ans.size(); i++){
        cout<< ans[i] <<", ";
    }
}
int main(){
    vector<int>arr = {2,0,-1,-3,4,7,-2,1};
    int k = 3; // window 3 :of subarray

    largestNumberSubarray(arr,k);
    return 0;
}
/*OUTPUT : 2, 0, 4, 7, 7, 7,*/