import Dfs from './Dfs'

test('dfs simple traverse', () => {
  const marked = []
  const visited = []

  const dfs = Dfs(
    { 0: [1, 2, 3], 2: [4], 4: [5] },
    (v, adjs, next) => {
      marked[v] = true
      visited.push(v)
      adjs(v).forEach(u => {
        if (!marked[u]) next(u)
      })
    }
  )

  dfs(0)
  expect(visited.toString()).toBe('0,1,2,4,5,3')
})