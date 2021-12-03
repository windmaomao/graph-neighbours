const Dfs = (visit) => {
  const fn = (src, ...others) => {
    return visit(src, fn, others)
  }

  return fn
}

module.exports = Dfs