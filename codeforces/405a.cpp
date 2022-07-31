#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n, a;
	cin >> n;
	vector<int>nums;
	for(int i = 0; i < n; i++)
	{
		cin >> a;
		nums.push_back(a);
	}
	sort(nums.begin(), nums.end());
	for(int i = 0; i < nums.size(); i++){
		cout << nums[i] << ' ';

	}
	return 0;
}
