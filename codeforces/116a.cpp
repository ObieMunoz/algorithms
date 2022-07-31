#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n, a, b;
	cin >> n;
	int max{0}, cur{0};
	for(int i = 0; i < n; i++)
	{
		cin >> a >> b;
		cur -= a;
		cur += b;
		if (cur>max) max = cur;
	}
	cout << max;
	return 0;
}
