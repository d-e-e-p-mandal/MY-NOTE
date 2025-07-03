#include <iostream>
using namespace std;

auto init = []() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    return 0;
}();

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << '\n';
}