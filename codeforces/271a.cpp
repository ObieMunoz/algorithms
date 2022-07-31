#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	
	int y;
	cin >> y;
	int x = y;
	bool ad = false;
	while(!ad){
		x++;
		string z = to_string(x);
		set<char> s;
		for (int i = 0; i < 4; i++)
		{
			s.insert(z[i]);
		}
		if (s.size() == 4) ad = true;
	}
	cout << x;
	return 0;
}
