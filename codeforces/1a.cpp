#include <iostream>

using std::cin;
using std::cout;

int main()
{
    long long n, m, a;
    cin >> n >> m >> a;
    cout << ((m + a - 1) / a) * ((n + a - 1) / a);
}