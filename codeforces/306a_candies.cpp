#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n, m;
	cin >> n >> m; // no of candies; no of friends
	vector<int> s(m, 0);
	while (n > 0)
	{
		for (int i = m - 1; i >= 0; i--) {
			if (n>0)
			{
				s[i]++;
				n--;
			}
		}
	}
	
	for (int i = 0; i < s.size(); i++)
	{
		cout << s[i];
		if(i != s.size() - 1) {
			cout << ' ';
		}
	}
	return 0;
}
