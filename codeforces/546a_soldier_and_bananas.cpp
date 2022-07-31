#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int k, n, w, tc = 0;
	cin >> k >> n >> w;
	for (int i = 1; i <= w; i++){
		tc+= i * k;
	}
	if (tc > n) cout << tc - n;
	else cout << 0;
	return 0;
}
