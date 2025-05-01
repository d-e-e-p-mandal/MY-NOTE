// subsquence : arr = [1,2,3] : subsequence : not contigious and order maintain
// base case index == 0 , from backside

//wrong answer : reverse ans

#include<bits/stdc++.h>
using namespace std;
void subsequence(int arr[], int n, vector<int>&sb, int index){
    if( index < 0) {
        for(auto it : sb){
            cout<< it <<" ";
        }
        if(sb.size() == 0){
            cout<<"{}";
        }
        cout<<endl;
        return ;
    }
    
    subsequence(arr,n,sb,index-1);
    sb.push_back(arr[index]);
  //  printf("\033[1;32m%dxx\033[0m\n",sb[0]);
    subsequence(arr,n,sb,index-1);
  //  printf("\033[1;31m%dxx\033[0m\n",sb[0]);
    sb.pop_back();
}
int main(){
    int n = 3;
    int arr[] = {1,2,3};
    vector<int>sb;

    subsequence(arr,n,sb,2);
    return 0;
}
/*
OUTPUT:
{}
1 
2 
2 1 
3 
3 1 
3 2 
3 2 1 
*/