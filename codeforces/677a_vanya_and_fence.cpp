#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	
	int n, h, a, w{0};
	cin >> n >> h;
	for(int i = 0; i < n; i++)
	{
		cin >> a;
		if (a <= h) w++;
		else w += 2;
	}
	cout << w;
	return 0;
}
