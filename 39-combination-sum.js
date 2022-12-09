var combinationSum = function (candidates, target) {
  let res = [];
  dfs(0, [], 0);
  return res;
  //   0    []       0
  function dfs(i, currArr, total) {
    if (total == target) {
      res.push([...currArr]);
      return;
    }

    if (total > target || i >= candidates.length) return;

    currArr.push(candidates[i]);
    dfs(i, currArr, total + candidates[i]);
    currArr.pop(candidates[i]);
    dfs(i + 1, currArr, total);
  }
};

// var combinationSum = function (candidates, target) {
//   const result = [];
//   candidates.sort((a, b) => a - b);
//   const dfs = (i, candidates, target, slate) => {
//     if (target < 0) return;

//     if (target === 0) {
//       result.push(slate.slice());
//       return;
//     }

//     for (let j = i; j < candidates.length; j++) {
//       slate.push(candidates[j]);
//       dfs(j, candidates, target - candidates[j], slate);
//       slate.pop();
//     }
//   };
//   dfs(0, candidates, target, []);
//   return result;
// };
