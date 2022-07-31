#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n, k;
	cin >> n >> k;
	int a;
	int score_to_beat = -1e9;
	int finalists{0};
	for (int i = 1; i <= n; i++)
	{
		cin >> a;
		if (i == k)
		{
			score_to_beat = a;
		}
		if (score_to_beat <= a && a > 0)
		{
			finalists++;
		}
	}
	cout << finalists << endl;
	return 0;
}
