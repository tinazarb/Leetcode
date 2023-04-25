var sortedSquares = function(nums) {
    let res = [];

    let left = 0,
        right = nums.length-1;

    while (left <= right){
        if (nums[left] * nums[left] > nums[right] * nums[right]){
            res.unshift(nums[left] * nums[left]);
            left += 1;
        }
        else {
            res.unshift(nums[right] * nums[right]);
            right -=1;
        }
    }
    return res;
};