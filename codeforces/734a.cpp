#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n, c{0};
	cin >> n;
	string s;
	cin >> s;
	for(int i = 0; i < s.length(); i++)
	{
		if(s[i]=='A')c++;
	}
	double f = s.length() / 2.0;
	if(c > f) cout << "Anton";
	else if (c < f) cout << "Danik";
	else cout << "Friendship";
	return 0;
}
