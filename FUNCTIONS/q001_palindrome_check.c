// check palindrome - optimized way
#include<stdio.h>
#include<string.h>
void isPalindrome(char*);//function declare
int main(){
    char str[10];
    printf("Enter number or character : ");
    scanf("%s",str);
    isPalindrome(str);//fuction call
    return 0;
}
void isPalindrome(char str[]){//function define
    int i,j;
    j = strlen(str)-1;
    for(i=0;i<j;i++,j--)
        if(str[i]!=str[j]){
            printf("Not palindrome\n");
            return ;
        }
    printf("Palindrome\n");
}
/*
OUTPUT
Enter number or character : 12345
Not pallendrome

Enter number or character : abba
Pallendrome

Enter number or character : 1221
Pallendrome
*/
