const PathTo = (src, edgeTo) => {
  const path = []

  const fn = v => {
    for (let x = v; x != src; x = edgeTo[x]) {
      path.push(x)
    }
    path.push(src)

    return path.reverse()
  }

  return fn
}

module.exports = PathTo