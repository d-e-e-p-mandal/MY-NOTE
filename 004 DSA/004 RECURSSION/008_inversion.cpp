// Merge shorts

#include<bits/stdc++.h>
using namespace std;

int merge(int arr[], int low, int mid, int high) {
    vector<int> temp;
    int left = low; 
    int right = mid + 1;
    int count = 0;
    // Merge two sorted subarrays
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push_back(arr[left++]);
        } else {
            temp.push_back(arr[right++]);
            count += mid - left + 1;
        }   
    }

    //Copy remaining elements
    while (left <= mid) temp.push_back(arr[left++]);
    while (right <= high) temp.push_back(arr[right++]);

    // Copy back to original array
    for (int i = low; i <= high; ++i) {
        arr[i] = temp[i - low];
    }
    return count;
}

int mergeShort(int arr[], int low, int high){
    if(low >= high) return 0;

    int mid = (low+high)/2;
    
    int x = mergeShort(arr, low, mid);
    int y = mergeShort(arr,mid+1,high);
    int c = merge(arr, low, mid, high);
    return x+y+c;
}

int main(){
    int arr[] = { 1,4,2};
    int n = sizeof(arr)/sizeof(int);

    //display
    cout<<mergeShort(arr,0,n-1)<<endl;
    // for(int i = 0; i<n ; i++){
    //     cout<<arr[i]<<"    ";
    // }
    return 0;
}
/*OUTPUT : 1 */