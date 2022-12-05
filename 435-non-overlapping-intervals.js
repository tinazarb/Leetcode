var eraseOverlapIntervals = function (intervals) {
  if (intervals.length == 0) return 0;

  let count = 0;

  intervals.sort((a, b) => a[1] - b[1]); // organize by end time ascending

  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start2, end2] = intervals[i];

    if (end <= start2) {
      // there is no overlap
      end = end2;
    } else {
      // there is an overlap
      count++;
      end = Math.min(end2, end);
    }
  }

  return count;
};
