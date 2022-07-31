#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	set<int> x;
	string s;
	cin >> s;
	for(int i = 0; i < s.size(); i++){
		x.insert(s[i]);
	}
	
	if (x.size() % 2 == 0) cout << "CHAT WITH HER!";
	else cout << "IGNORE HIM!";
	return 0;
}
