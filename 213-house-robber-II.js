var rob = function (arr) {
  if (arr.length == 1) return arr[0];
  if (arr.length == 2) return Math.max(arr[0], arr[1]);

  let memo = new Array(arr.length + 1).fill(-1);

  const robHelper = (nums, i) => {
    let result;

    if (i < 0) return 0;
    if (memo[i] >= 0) return memo[i];

    result = Math.max(robHelper(nums, i - 2) + nums[i], robHelper(nums, i - 1));
    memo[i] = result;

    return result;
  };

  let endNotIncluded = robHelper(arr, arr.length - 2);

  memo = new Array(arr.length).fill(-1);
  let startNotIncluded = robHelper(arr.slice(1), arr.length - 2);

  return Math.max(endNotIncluded, startNotIncluded);
};
