// 127. Word Ladder

// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Example 1:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// Example 2:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

var ladderLength = function (beginWord, endWord, wordList) {
  let set = new Set(wordList);
  let queue = [beginWord];
  let res = 1;

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let currentWord = queue.shift();
      if (currentWord == endWord) return res;
      for (let i = 0; i < currentWord.length; i++) {
        for (let j = 0; j < 26; j++) {
          let nextWord =
            currentWord.slice(0, i) +
            String.fromCharCode(j + 97) +
            currentWord.slice(i + 1);
          if (set.has(nextWord)) {
            queue.push(nextWord);
            set.delete(nextWord);
          }
        }
      }
    }
    res++;
  }
  return 0;
};
