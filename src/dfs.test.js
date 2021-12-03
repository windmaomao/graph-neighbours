import Dfs from './Dfs'

test('dfs simple traverse', () => {
  const edges = { 0: [1, 2, 3], 2: [4], 4: [5] }
  const marked = []
  const visited = []
  const adjs = v => edges[v] || []

  Dfs((v, next) => {
    marked[v] = true
    visited.push(v)
    adjs(v).forEach(u => {
      if (!marked[u]) next(u)
    })
  })(0)

  expect(visited.toString()).toBe('0,1,2,4,5,3')
})