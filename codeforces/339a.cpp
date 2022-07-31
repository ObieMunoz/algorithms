#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	string s;
	cin >> s;
	vector<int> result;
	for(int i = 0; i < s.size(); i++){
		if(s[i] != '+') 
		{
			result.push_back(s[i]);
		}
	}
	sort(result.begin(), result.end());
	for (int i = 0; i < result.size(); i++)
	{
		if(i == result.size() - 1) cout << result[i] - 48;
		else cout << result[i] - 48 << "+";
	}
	return 0;
}
