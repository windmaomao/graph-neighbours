const Dfs = (adjFn, visit) => {
  const neighbours = node => (
    typeof adjFn === 'function' 
      ? adjFn(node) : adjFn[node]
  ) || []

  const fn = (src) => {
    return visit(src, neighbours, fn)
  }

  return fn
}

module.exports = Dfs