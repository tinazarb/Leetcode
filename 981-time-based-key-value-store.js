// 981. Time Based Key-Value Store

// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:

//     TimeMap() Initializes the object of the data structure.
//     void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
//     String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

// Example 1:
// Input
// ["TimeMap", "set", "get", "get", "set", "get", "get"]
// [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// Output
// [null, null, "bar", "bar", null, "bar2", "bar2"]

// Explanation
// TimeMap timeMap = new TimeMap();
// timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
// timeMap.get("foo", 1);         // return "bar"
// timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
// timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
// timeMap.get("foo", 4);         // return "bar2"
// timeMap.get("foo", 5);         // return "bar2"

//Approach 1: Hashmap + Linear Search
let keyTimeMap = {};
var TimeMap = function () {};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!(key in keyTimeMap)) {
    keyTimeMap[key] = {};
  }
  keyTimeMap[key][timestamp] = value;
};

TimeMap.prototype.get = function (key, timestamp) {
  if (!(key in keyTimeMap)) {
    return '';
  }
  for (let currTime = timestamp; currTime >= 1; --currTime) {
    if (currTime in keyTimeMap[key]) {
      return keyTimeMap[key][currTime];
    }
  }
  return '';
};

//Approach 2: Array + Binary Search
let keyTimeMap = {};
var TimeMap = function () {
  keyTimeMap = {};
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!(key in keyTimeMap)) {
    keyTimeMap[key] = Array();
  }
  keyTimeMap[key].push([timestamp, value]);
};

TimeMap.prototype.get = function (key, timestamp) {
  if (!(key in keyTimeMap)) {
    return '';
  }
  if (timestamp < keyTimeMap[key][0][0]) {
    return '';
  }
  let left = 0;
  let right = keyTimeMap[key].length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (keyTimeMap[key][mid][0] <= timestamp) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (right == 0) {
    return '';
  }
  return keyTimeMap[key][right - 1][1];
};
