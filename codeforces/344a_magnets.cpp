#include <bits/stdc++.h>
#define ll long long

using namespace std;

int main()
{
	int tt; 
	cin >> tt;
	int n, c{0}, p;
	
	while(tt--)
	{
		cin >> n;
		if(p && p != n)
		{
			++c;
		}
		p = n;
	}
	cout << c;
	return 0;
}
