#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	
	int n;
	cin >> n;
	int s{0};
	for (int i = 0; i < n; i++)
	{
		int p;
		cin >> p;
		s += p;
	}
	setprecision(12);
	double result = s * 1.0 / n;
	cout << result;
	return 0;
}
