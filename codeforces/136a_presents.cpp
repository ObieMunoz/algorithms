#include <bits/stdc++.h>
#define ll long long

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	
	int n;
	cin >> n;
	vector<int> people;
	vector<pair<int,int>> pp;
	for(int i = 0; i < n; i++)
	{
		int p;
		cin >> p;
		people.push_back(p);
		pp.push_back(make_pair(i+1,p));
		cout << pp[i].first << " " << pp[i].second << "\n";
	}
	
	for(int i = 0; i < pp.size(); i++)
	{
		for (int j = 0; j < pp.size(); j++)
		{
			if (pp[j].second == i+1) cout << pp[j].first;
		}
		if (i != pp.size() - 1) cout << " ";
	}
	return 0;
}
