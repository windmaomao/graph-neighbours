import Dfs from '../Dfs'

const hasCycle = (m) => {
  const marked = []
  let cycle = false

  Dfs((v, adjs, next, params) => {
    marked[v] = true
    adjs(v).forEach(u => {
      if (!marked[u]) {
        next(u, v)
      } else if (v != params[0]) {
        cycle = true
      }
    })
    return cycle
  }, m)(0)

  return cycle
}

test('has no cycle', () => {
  const adj = { 0: [1, 2], 2: [4], 4: [5, 3] }
  expect(hasCycle(adj)).toBe(false)
})

test('has cycle', () => {
  const adj = { 0: [1, 2, 3], 2: [4], 4: [5, 3], 3: [0] }
  expect(hasCycle(adj)).toBe(true)
})