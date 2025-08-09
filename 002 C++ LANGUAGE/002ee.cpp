//leetcode 494
// class Solution {
// public:
//     int findTargetSumWays(vector<int>& nums, int target) {
//         unordered_map<string, int> memo; // key: "index,sum"

//         function<int(int, int)> dfs = [&](int idx, int sum) -> int {
//             // Base case: reached end
//             if (idx == nums.size()) {
//                 return sum == target ? 1 : 0;
//             }

//             // Memoization key
//             string key = to_string(idx) + "," + to_string(sum);
//             if (memo.count(key)) return memo[key];

//             // Choose +
//             int add = dfs(idx + 1, sum + nums[idx]);
//             // Choose -
//             int sub = dfs(idx + 1, sum - nums[idx]);

//             return memo[key] = add + sub;
//         };

//         return dfs(0, 0);
//     }
// };