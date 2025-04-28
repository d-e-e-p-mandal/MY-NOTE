// subsequence sum : arr = {1,2,1} sum = 2 print subsequence which sum is 2 : true or false 
// true false declare golbal
#include<bits/stdc++.h>
using namespace std;
bool flag = true;
void isSubsequenceSum(int arr[], int n,int sum,vector<int> &sb, int index,int s){
    if(index == n){
        if(s == sum && flag == true){
            for(auto it : sb){
                cout<< it <<" ";
            }
            cout<<endl;
            flag = false;
        }
        return;
    }

    s += arr[index];
    sb.push_back(arr[index]);
    isSubsequenceSum(arr, n, sum, sb, index +1, s);

    s -= arr[index];
    sb.pop_back();
    isSubsequenceSum(arr, n, sum, sb, index +1, s);
}

int main(){
    int n = 3;
    int arr[] ={1,2,1};
    int sum = 2;

    vector<int>sb;

    isSubsequenceSum(arr, n, sum, sb, 0,0);
    return 0;
}