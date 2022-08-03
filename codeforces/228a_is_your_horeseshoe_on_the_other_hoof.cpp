#include <bits/stdc++.h>
using namespace std;

int main()
{
	int s1,s2,s3,s4;
	set<int> r;
	cin >> s1 >> s2 >> s3 >> s4;
	r.insert(s1);
	r.insert(s2);
	r.insert(s3);
	r.insert(s4);
	cout << 4 - r.size();
	return 0;
}
