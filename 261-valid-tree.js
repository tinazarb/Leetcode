function validTree(n, edges) {
  let map = {};

  for (let [a, b] of edges) {
    if (!map[a]) {
      map[a] = [];
    }
    if (!map[b]) {
      map[b] = [];
    }
    map[a].push(b);
    map[b].push(a);
  }

  let visited = new Set();

  if (n == 1) return true;
  if (!dfs(0, null, visited) || visited.size < n) {
    return false;
  }

  return true;

  function dfs(next, prev, visited) {
    next = parseInt(next);

    if (visited.has(next)) return false;
    visited.add(next);
    if (!map[next]) return false;

    for (let child of map[next]) {
      if (prev == child) continue;
      if (!dfs(child, next, visited)) return false;
    }
    return true;
  }
}
