//DP
var rob = function (nums) {
  let rob1 = 0,
    rob2 = 0;
  let temp;

  for (let n of nums) {
    temp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
};

//Top Down Memoization
var rob = function (nums) {
  let n = nums.length;
  if (n == 0) return 0;
  if (n == 1) return nums[0];
  if (n == 2) return Math.max(nums[0], nums[1]);

  let dp = [];

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[n - 1];
};
