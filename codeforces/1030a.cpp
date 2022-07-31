#include <bits/stdc++.h>

using namespace std;

int main()
{
	int n, p;
	cin >> n;
	bool h = false;
	for (int i = 0; i < n; i++)
	{
		cin >> p;
		if (p > 0) {
			h = true;
			break;
		}
	}
	if(h) cout << "HARD";
	else cout << "EASY";
	return 0;
}
