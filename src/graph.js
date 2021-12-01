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
  // options.visited - visited nodes to start
  // options.nextCb - callback for the next node
  // options.method - travase method, 'dfs' or 'bfs'
  const traverse = (src, cb, {
    visited, nextCb, method
  } = {}) => {
    const marked = visited || {}
    const queue = [src]
    const nextQueued = method === 'bfs'
      ? q => q.shift() : q => q.pop()


    let node
    while (
      (node = nextQueued(queue)) != undefined
      && !marked[node]
    ) {
      marked[node] = true
      cb && cb(node)
      for (const next of neighbours(node)) {
        nextCb && nextCb(next, node, !!marked[node])
        if (!marked[next]) queue.push(next)
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

  // check cycle with dfs
  const cycle = (src, cb) => {
    let hasCycle = false
    traverse(src, cb, {
      nextCb: (v, p, visited) => {
        if (visited) {
          if (v != p) hasCycle = true
        }
      }
    })
    return hasCycle
  }

  return {
    neighbours, 
    traverse, dfs, bfs,
    cycle,
  }
}

module.exports = Graph