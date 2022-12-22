function canFinish(numCourses, prerequisites) {
  function createAdjList(arr) {
    let adjList = {};
    for (let i = 0; i < arr.length; i++) {
      if (adjList[arr[i][0]]) {
        adjList[arr[i][0]].push(arr[i][1]);
      } else {
        adjList[arr[i][0]] = [arr[i][1]];
      }
    }
    return adjList;
  }

  const adjList = createAdjList(prerequisites);
  const visited = new Set();

  for (let key in adjList) {
    if (visited.has(+key)) continue;

    const set = new Set();
    if ((!dfs(+key), set)) return false;
  }

  return true;

  function dfs(course, set) {
    if (set.has(course)) return false;
    if (visited.has(course)) return true;

    if (!adjList[course]) {
      visited.add(course);
      return true;
    }

    set.add(course);
    for (let neededCourse of adjList[course]) {
      if (!dfs(neededCourse, set)) return false;
    }
    visited.add(course);
    set.delete(course);
    return true;
  }
}
