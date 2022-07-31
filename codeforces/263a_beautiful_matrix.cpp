#include <bits/stdc++.h>

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);
	int array[5][5];
	int x, locX, locY;
	
	for(int i = 0; i < 5; i++){
		for(int j = 0; j < 5; j++){
			cin >> x;
			array[i][j] = x;
			if (x == 1) {
				locX = i;
				locY = j;
			}
		}
	}
	cout << abs(2 - locX) + abs(2 - locY);
	return 0;
}
