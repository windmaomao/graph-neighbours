const Bfs = (visit) => {
  let arr = []
  const q = {
    enqueue: v => { arr.push(v) },
    dequeue: () => arr.shift(),
    empty: () => !arr.length
  }

  const fn = (src, ...others) => {
    arr = [src]
    while (!q.empty()) {
      visit(q, ...others)
    }
  }

  return fn
}

module.exports = Bfs