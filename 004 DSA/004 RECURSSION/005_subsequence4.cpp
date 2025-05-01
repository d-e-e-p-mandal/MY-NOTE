// subsquence : arr = [1,2,3] : subsequence : not contigious and order maintain
// using loop (logic)
#include<bits/stdc++.h>
using namespace std;
void subsequence(int arr[], int n, vector<int>&sb, int index){

    for(int i = index; i<n; i++){
        // pick element 
        // add element in sb
        sb.push_back(arr[i]);
        subsequence(arr,n,sb,i+1);
        // not pick element
        //remove element and 
        sb.pop_back();
    }
    
    // print all subsequence
    for(auto it : sb){
        cout<< it <<" ";
    }
    if(sb.size() == 0){
        cout<<"{}";
    }
    cout<<endl;
    

}
int main(){
    int n = 3;
    int arr[] = {1,2,3};
    vector<int>sb;

    subsequence(arr,n,sb,0);
    return 0;
}