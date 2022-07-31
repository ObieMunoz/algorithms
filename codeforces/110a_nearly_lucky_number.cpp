#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	long long n;
	cin >> n;
	string s = to_string(n);
	int l{0};
	for(int i = 0; i < s.length(); i++)
	{
		if(s[i] == '4' || s[i] == '7') l++;
	}
	if (l == 4 || l == 7) cout << "YES";
	else cout << "NO";
	return 0;
}
