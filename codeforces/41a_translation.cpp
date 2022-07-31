#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	string t, s;
	cin >> t >> s;
	bool o = true;
	if(t.length() != s.length()){
		 cout << "NO";
		 return 0;
	 }
	else
	{
		for(int i = 0; i < t.length(); i++)
		{
			if(t[i] != s[s.length() - i -1]) o = false;
		}
	}
	if (o) cout << "YES";
	else cout << "NO";
	return 0;
}
