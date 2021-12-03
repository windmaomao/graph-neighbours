import Dfs from './Dfs'

test('dfs simple traverse', () => {
  const marked = []
  const visited = []

  const dfs = Dfs((v, adjs, next) => {
    marked[v] = true
    visited.push(v)
    adjs(v).forEach(u => {
      if (!marked[u]) next(u)
    })
  }, { 0: [1, 2, 3], 2: [4], 4: [5] })

  dfs(0)
  expect(visited.toString()).toBe('0,1,2,4,5,3')
})