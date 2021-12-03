const Dfs = (adjFn) => {
  const neighbours = node => (
    typeof adjFn === 'function' 
      ? adjFn(node) : adjFn[node]
  ) || []

  const traverse = (src, {
    step, pick, back
  } = {}) => {
    const dfs = (node) => {
      const canContinue = step(node)

      if (canContinue !== false) {
        neighbours(node).forEach(next => {
          if (!pick(next, node)) return
          dfs(next)
        })
      }

      back && back()
    }

    dfs(src)
  }

  return traverse
}

module.exports = Dfs