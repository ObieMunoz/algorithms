#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n;
	cin >> n;
	vector<pair<int,int>> bids;
	for (int i = 0; i < n; i++) 
	{
		int p;
		cin >> p;
		bids.push_back(make_pair(p, (i+1)));
	}
	
	sort(bids.begin(), bids.end());
	cout << bids[bids.size() - 1].second << ' ' << bids[bids.size() - 2].first;
	return 0;
}
