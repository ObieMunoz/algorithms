#include <bits/stdc++.h>
#define ll long long

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	
	int n;
	cin >> n;
	vector<int> people(n, -1);
	for(int i = 0; i < n; i++)
	{
		int p;
		cin >> p;
		people[p - 1] = i + 1;
	}
	
	for(int g: people)
		cout << g << " ";
		
	return 0;
}
