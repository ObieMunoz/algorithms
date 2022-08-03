#include <bits/stdc++.h>
using namespace std;
 
int main()
{
    int n;
    cin >> n;
    string s = "";
    for(int i=0; i < n; i++)
    {
        if(i == 0) continue;
        else if (i % 2 != 0) s.append("that I love ");
        else s.append("that I hate ");
    }
    cout << "I hate " << s << "it";
    return 0;
}
