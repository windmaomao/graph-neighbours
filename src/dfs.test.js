import Dfs from './Dfs'

test('dfs simple traverse', () => {
  const dfs = Dfs({ 0: [1, 2, 3], 2: [4], 4: [5] })

  const marked = []
  const visited = []
  dfs(0, {
    step: (v) => { 
      marked[v] = true 
      visited.push(v)
    },
    pick: (v) => (!marked[v])
  })

  expect(visited.toString()).toBe('0,1,2,4,5,3')
})