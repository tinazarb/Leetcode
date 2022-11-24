var hammingWeight = function (n) {
  let count = 0;

  while (n) {
    if (n & (1 === 1)) {
      count++;
    }

    n = n >>> 1;
  }

  return count;
};

var hammingWeight = function (n) {
  const str = n.toString(2);
  let counter = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == '1') counter++;
  }

  return counter;
};
