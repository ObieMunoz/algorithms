#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int a, b;
	cin >> a >> b;
	int years = 0;
	while(a <= b)
	{
		a *= 3;
		b *= 2;
		years++;
	}
	cout << years;
	return 0;
}
