// subsequence sum : arr = {1,2,1} sum = 2 print subsequence which sum is 2
#include<bits/stdc++.h>
using namespace std;

void subSequenceSum(int arr[], int n, int sum, vector<int>&sb, int index, int cSum){
    if(index == n){
        if(cSum == sum){
            for(auto it : sb){
                cout<< it <<" ";
            }
            cout<<endl;
        }
        return ;
    }

    subSequenceSum(arr, n, sum, sb, index+1, cSum);
    sb.push_back(arr[index]);
    cSum += arr[index];
    subSequenceSum(arr, n, sum, sb, index+1, cSum);
    cSum -= arr[index];
    sb.pop_back();

}
int main(){
    int n = 3;
    int arr[] = {1,2,1};
    int sum = 2;
    vector<int>sb;
    subSequenceSum(arr,3,sum,sb,0,0);

    return 0;
}
/*
OUTPUT :
2 
1 1 
*/