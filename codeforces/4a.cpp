#include <iostream>

using std::cin;
using std::cout;

int main()
{
    int n;
    cin >> n;
    if (n % 2 == 0 && n > 2)
    {
        cout << "YES";
    }
    else
    {
        cout << "NO";
    }
}