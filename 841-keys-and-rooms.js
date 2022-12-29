let res, ke;
const canVisitAllRooms = (rooms) => {
  res = new Set(); // save room idx
  ke = new Set(); // save all keys
  dfs(rooms, 0);
  return res.size == rooms.length;
};

const dfs = (rooms, idx) => {
  if (res.has(idx)) return;
  res.add(idx);
  let e = rooms[idx];
  let n = e.length;
  if (n == 0) {
    // empty room[idx] can be visited directly without keys
    res.add(idx);
    return;
  }
  for (let i = 0; i < n; i++) {
    ke.add(e[i]);
    if (hasAllkey(ke, e)) res.add(idx); // all room[idx] keys inside ke Set, this idx is able to visit
    dfs(rooms, e[i]);
  }
};

const hasAllkey = (ke, a) => {
  for (const e of a) {
    if (!ke.has(e)) return false;
  }
  return true;
};
