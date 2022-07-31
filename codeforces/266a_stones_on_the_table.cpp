#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n;
	string s;
	cin >> n >> s;
	int result{0};
	for (int i = 1; i < s.length(); i++){
		if(s[i] == s[i - 1]) result++;
	}
	cout << result;
	return 0;
}
