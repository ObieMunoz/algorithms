#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n, p, q, r{0};
	cin >> n;
	for (int i = 0; i < n; i++)
	{
		cin >> p >> q;
		if (q-p >= 2) r++;
	}
	cout << r;
	return 0;
}
