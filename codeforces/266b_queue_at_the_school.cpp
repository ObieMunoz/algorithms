#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n, t;
	cin >> n >> t;
	string s;
	cin >> s;
	while(t)
	{
		for (int i = 1; i < n; i++)
		{
			if(s[i] == 'G' && s[i-1] == 'B')
			{
				swap(s[i], s[i-1]);
				i++;
			}
		}
		t--;
	}
	cout << s;
	return 0;
}
