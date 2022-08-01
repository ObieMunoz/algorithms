#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n;
	cin >> n;
	vector<string> p;
	for (int i = 0; i < n; i++)
	{
		string s;
		cin >> s;
		p.push_back(s);
	}
	
	int s{-1};
	char current;
	bool c = true;
	while(c)
	{
		s++;
		current = p[0][s];
		for(int i = 1; i < n; i++)
		{
			if (p[i][s] == current)
			{
				continue;
			}
			else
			{
				c = false;
				break;
			}
		}
	}
	cout << s;
	return 0;
}
