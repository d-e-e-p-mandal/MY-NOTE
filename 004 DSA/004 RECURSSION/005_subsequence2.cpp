// subsquence : arr = [1,2,3] : subsequence : not contigious and order maintain
#include<bits/stdc++.h>
using namespace std;
void subsequence(int arr[], int n, vector<int>&sb, int index){
    if( index == n) {
        for(auto it : sb){
            cout<< it <<" ";
        }
        if(sb.size() == 0){
            cout<<"{}";
        }
        cout<<endl;
        return ;
    }
    
    subsequence(arr,n,sb,index+1);
    // pick element 
    // add element in sb
    sb.push_back(arr[index]);
    
    subsequence(arr,n,sb,index+1);
    // not pick element
    //remove element and 
    sb.pop_back();
}
int main(){
    int n = 3;
    int arr[] = {1,2,3};
    vector<int>sb;

    subsequence(arr,n,sb,0);
    return 0;
}