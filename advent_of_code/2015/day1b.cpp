#include <bits/stdc++.h>

using namespace std;

int main()
{
	freopen("input.txt", "r", stdin);
	freopen("output.txt", "w", stdout);
	string x;
	getline(cin, x);
	int n{0};
	for(int i = 0; i < x.length(); i++)
	{
		if(x[i] == '(') n++;
		else n--;
		if (n < 0) {
			cout << i + 1;
			break;
		}
	}
	return 0;
}
