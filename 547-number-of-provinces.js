var findCircleNum = function(isConnected) {
  const adj = new Map()
  for(let i=0; i<isConnected.length;i++){
    const e = isConnected[i]
    adj.set(i, new Set())
    for(let j = 0; j<e.length;j++){
      if(j === i) continue
      const val = e[j]
      if(!val) continue
      adj.get(i).add(j)
    }
  }
  
  const seen = new Set()
  let count = 0
  for(let i=0; i<isConnected.length;i++){
    if(seen.has(i)) continue
    count++
    dfs(i, adj, seen)
  }
  return count
};

function dfs(idx, adj, seen){
  if(seen.has(idx)) return
  seen.add(idx)
  for(let s of adj.get(idx)){
    dfs(s, adj, seen)
  }
}