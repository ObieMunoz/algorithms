#include <vector>

using std::vector;

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        vector<int> ret;
        typedef vector<double>::size_type vec_sz;
        vec_sz size = nums.size();
        for (vec_sz i = 0; i < size; i++)
        {
            for (vec_sz j = 0; j < size; j++)
            {
                if (i == j)
                    continue;
                if (nums[i] + nums[j] == target)
                {
                    ret.push_back(i);
                    ret.push_back(j);
                    return ret;
                }
            }
        }
        return ret;
    }
};

int main()
{
    return 0;
}
