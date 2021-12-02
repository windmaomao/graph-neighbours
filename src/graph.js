const Graph = (adjFn) => {
  // neighbours for each node
  const neighbours = node =>
    (typeof adjFn === 'function'
      ? adjFn(node)
      : adjFn[node]
    ) || []

  // traverse from src node
  //    visiting nodes on the way
  // src - starting node
  // cb - callback for node visit
  // options.method - travase method, 'dfs' or 'bfs'
  // options.visited - initial visited nodes to start
  // options.nextCb - callback for the next node
  // options.canVisit - can visit for a next node
  // options.goalReached - if traversal can end
  const traverse = (src, cb, {
    method, visited, nextCb, canVisit, shouldStop
  } = {}) => {
    const marked = visited || {}
    const queue = [src]
    const nextQueued = method === 'bfs'
      ? q => q.shift() : q => q.pop()
    canVisit = canVisit 
      || ((allVisited, next) => !allVisited[next])
    shouldStop = shouldStop
      || (() => false)

    let node
    while (
      (node = nextQueued(queue)) != undefined
      && !marked[node]
      && !shouldStop()
    ) {
      marked[node] = true
      cb && cb(node)
      for (const next of neighbours(node)) {
        nextCb && nextCb(next, node, !!marked[node])
        if (canVisit(marked, next, node)) queue.push(next)
      }
    }

    return marked
  }

  const dfs = (src, cb, options = {}) => {
    traverse(src, cb, options)
  }

  const bfs = (src, cb, options = {}) => {
    traverse(src, cb, { ...options, method: 'bfs' })
  }

  return { neighbours, traverse, dfs, bfs }
}

module.exports = Graph