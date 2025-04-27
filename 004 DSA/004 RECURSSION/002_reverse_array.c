// REVERSE ARRAY : 2 POINTER 
#include<stdio.h>
void swap(int *x, int *y){
    int temp = *x;
    *x = *y;
    *y = temp;
}
void reverse(int *arr, int left, int right){
    if(left >= right)return ;
    swap(&arr[left],&arr[right]);
    reverse(arr,left+1,right-1);
}
int main(){
    int n;
    printf("Enter number of element :");
    scanf("%d",&n);

    int arr[n];
    printf("Enter array element : \n");
    for(int i=0; i<n; i++){
        scanf("%d",&arr[i]);
    }

    reverse(arr,0, n-1);

    //display 
    printf("REVERSE : \n");
    for(int i=0; i<n; i++){
        printf("%d\t",arr[i]);
    }
    return 0;
}