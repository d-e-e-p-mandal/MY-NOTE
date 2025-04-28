// subsequence sum : arr = {1,2,1} sum = 2 print subsequence which sum is 2 : true or false 
#include<bits/stdc++.h>
using namespace std;
bool isSubsequenceSum(int arr[], int n,int sum,vector<int> &sb, int index,int s){
    if(index == n){
        if(s == sum){
            for(auto it : sb){
                cout<< it <<" ";
            }
            cout<<endl;
            return true;
        }
        return false;
    }
    s += arr[index];
    sb.push_back(arr[index]);
    if(isSubsequenceSum(arr, n, sum, sb, index +1, s) == true) return true;
    
    s -= arr[index];
    sb.pop_back();
    if(isSubsequenceSum(arr, n, sum, sb, index +1, s) == true) return true;
    

    return false;
}

int main(){
    int n = 3;
    int arr[] ={1,2,1};
    int sum = 2;

    vector<int>sb;

    isSubsequenceSum(arr, n, sum, sb, 0,0);
    return 0;
}