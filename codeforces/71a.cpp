#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n;
	cin >> n;
	string x;
	for(int i = 0; i < n; i++)
	{
		cin >> x;
		if (x.size() > 10)
		{
			cout << x[0];
			cout << x.size() - 2;
			cout << x[x.size() -1];
			cout << "\n";
		}
		else
		{
			cout << x << "\n";
		}
	}
}
