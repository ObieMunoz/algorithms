#include <iostream>
using namespace std;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	int number_of_problems{0};
	int solutions{0};
	cin >> number_of_problems;
	for(int i = 0; i < number_of_problems; i++)
	{
		int a, b, c;
		cin >> a >> b >> c;
		if (a + b + c >= 2)
		{
			solutions++;
		}
	}
	cout << solutions;
}
