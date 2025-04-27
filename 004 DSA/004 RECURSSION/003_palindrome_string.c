// Palindrome or not : String (only left pass)
#include<stdio.h>
#include<stdbool.h>
#include<string.h>
bool isPalindrome(char *s, int left){
    if(left >= strlen(s)/2) return true;
    if(s[left] != s[strlen(s) - left - 1]) return false;
    return isPalindrome(s,left+1);
}

int main(){
    char s1[] = "MADAM";
    char s2[] = "abde";

    printf("s1 is palindrome : %s \n", isPalindrome(s1, 0) ? "Yes" : "No");
    printf("s2 is palindrome : %s \n", isPalindrome(s2, 0) ? "Yes" : "No");
    return 0;
}