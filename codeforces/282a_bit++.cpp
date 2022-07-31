#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n;
	cin >> n;
	string x;
	int result{0};
	for(int i = 0; i < n; i++)
	{
		cin >> x;
		if (x.find('-') != string::npos) result--;
		else result++;
	}
	cout << result;
	return 0;
}
