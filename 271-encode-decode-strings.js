/* 659. Encode and Decode Strings

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement encode and decode.

Example 1:

Input: ["lint","code","love","you"]
Ouput: ["lint","code","love","you"]
*/

function encode(strs) {
  let res = '';

  for (let s of strs) {
    res += s.length + '#' + s;
  }
  return res;
}

function decode(str) {
  let res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] != '#') {
      j += 1;
      let length = parseInt(str.slice(i, j));
      res.push(str.slice(j + 1, j + 1 + length));
      i = j + 1 + length;
    }
  }
  return res;
}
