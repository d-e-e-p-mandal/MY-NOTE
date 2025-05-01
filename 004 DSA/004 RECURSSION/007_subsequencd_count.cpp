// subsequence count : arr[] = {1,2,1} sum = 2;

#include<bits/stdc++.h>
using namespace std;
int countSub(int arr[], int n,int index, int sum , int s){
    if(index == n){
        if(s == sum){
            return 1;
        }
        else return 0;
    }

    int l = countSub(arr,n,index+1,sum,s);
    s += arr[index];

    int r = countSub(arr,n,index+1,sum,s);
    s -= arr[index];

    return l+r;
}
int main(){
    int arr[] = {1,2,1};
    int n = 3; // size of array
    int sum = 2;

    cout<<countSub(arr,n,0,sum,0) << endl; // initially courrent s (sum) = 0;
    return 0;
}