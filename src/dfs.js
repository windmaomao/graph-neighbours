const Dfs = (visit, adjFn) => {
  const neighbours = node => (
    typeof adjFn === 'function' 
      ? adjFn(node) : adjFn[node]
  ) || []

  const fn = (src, ...others) => {
    return visit(src, neighbours, fn, others)
  }

  return fn
}

module.exports = Dfs