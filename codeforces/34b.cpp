#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n, m;
	cin >> n >> m;
	vector<int> p;
	int a;
	for(int i = 0; i < n; i++)
	{
		cin >> a;
		p.push_back(a);
	}
	sort(p.begin(), p.end());
	int profit{0};
	for(int i = 0; i < m; i++)
	{
		if (p[i] < 0) profit -= p[i];
	}
	cout << profit;
	return 0;
}
