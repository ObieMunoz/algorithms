#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	string s, t;
	cin >> s >> t;
	string r = "";
	for(int i = 0; i < s.length(); i++)
	{
		if (s[i] != t[i]) r.push_back('1');
		else r.push_back('0');
	}
	cout << r;
	return 0;
}
