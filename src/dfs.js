const Dfs = (adjFn) => {
  const neighbours = node =>
    (typeof adjFn === 'function'
      ? adjFn(node)
      : adjFn[node]
    ) || []

  const traverse = (src, {
    step, pick, goal, back
  } = {}) => {
    const dfs = (node) => {
      if (goal && goal(node)) return

      step && step(node)

      neighbours(node).forEach(next => {
        if (!pick(next, node)) return
        dfs(next)
      })

      back && back()
    }

    dfs(src)
  }

  return traverse
}

module.exports = Dfs