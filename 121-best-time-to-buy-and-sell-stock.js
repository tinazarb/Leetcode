// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

//     1 <= prices.length <= 105
//     0 <= prices[i] <= 104

// Solution 1: Kadane's Algorithm
// Time: O(n) | Space: O(1)
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minBuyprice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    minBuyprice = Math.min(minBuyprice, prices[i]);
    let currprofit = prices[i] - minBuyprice;
    maxProfit = Math.max(currprofit, maxProfit);
  }
  return maxProfit;
};

//Solution 2: Sliding Window
// Time: O(n) | Space: O(1)
const maxProfit = (prices) => {
  let left = 0;
  let right = 1;
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
