#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	string x, y;
	cin >> x >> y;
	for (int i = 0; i < x.length(); i++){
		x[i] = tolower(x[i]);
		y[i] = tolower(y[i]);
	}
	if (x == y) cout << 0;
	else if (x >= y) cout << 1;
	else if (x <= y) cout << -1;
	return 0;
}
