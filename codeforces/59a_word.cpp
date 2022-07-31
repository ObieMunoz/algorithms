#include <bits/stdc++.h>
using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	string s;
	cin >> s;
	int lower{0}, upper{0};
	for(int i = 0; i < s.length(); i++)
	{
		if ((int)s[i] < (int)'a') upper++;
		else lower++;
	}
	for(int i = 0; i < s.length(); i++){
		if(lower >= upper) {
			s[i] = tolower(s[i]);
		}
		else 
		{
			s[i] = toupper(s[i]);
		}
	}
	cout << s;
	return 0;
}
