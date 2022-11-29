var reverseBits = function (n) {
  let arr = n.toString(2).split('').reverse();
  return (
    arr.push.apply(arr, new Array(32 - arr.length).fill(0)) &&
    parseInt(arr.join(''), 2)
  );
};

function reverseBits(n) {
  let res = '';
  n = n.toString(2);

  while (n.length < 32) {
    n = '0' + n;
  }
  for (let i = n.length - 1; i >= 0; i--) {
    res += n[i];
  }
  return parseInt(res, 2);
}
