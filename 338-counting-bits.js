var countBits = function (n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    let ones = i
      .toString(2)
      .split('')
      .filter((el) => el === '1').length;
    res.push(ones);
  }
  return res;
};

var countBits = function (num) {
  let bits = [];
  for (let i = 0; i <= num; i++)
    // remove 0 from bits
    bits.push(Number(i).toString(2).replace(/0/g, '').length);
  return bits;
};
