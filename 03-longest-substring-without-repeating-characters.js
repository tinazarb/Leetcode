var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let start = 0;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined || map[s[i]] < start) {
      map[s[i]] = i;
    } else {
      start = map[s[i]] + 1;
      map[s[i]] = i;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};
