// REVERSE ARRAY : 1 POINTER 
#include<stdio.h>
void swap(int *x, int *y){
    int temp = *x;
    *x = *y;
    *y = temp;
}
void reverse(int *arr, int left, int size){
    if(left >= size/2)return ;
    swap(&arr[left],&arr[size - left - 1]);
    reverse(arr,left+1,size);
}
int main(){
    int n;
    printf("Enter number of element : ");
    scanf("%d",&n);

    int arr[n];
    printf("Enter array element : \n");
    for(int i=0; i<n; i++){
        scanf("%d",&arr[i]);
    }

    reverse(arr,0, n);

    //display 
    printf("REVERSE : \n");
    for(int i=0; i<n; i++){
        printf("%d\t",arr[i]);
    }
    return 0;
}