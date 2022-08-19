#include <bits/stdc++.h>
#define ll long long

using namespace std;

int main()
{
    ll n;
    cin >> n;
    ll r{0};
    if (n % 2 == 0)
        r = n / 2;
    else
        r = ((n + 1) / 2) * (-1);
    cout << r;
    return 0;
}