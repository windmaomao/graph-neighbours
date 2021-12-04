import Dfs from '../Dfs'

const topological = (m) => {
  const marked = []
  const visited = []
  const adjs = v => m[v] || []

  Object.keys(m).forEach(o => {
    if (marked[o]) return

    Dfs((v, next) => {
      marked[v] = true
      adjs(v).forEach(u => {
        if (!marked[u]) next(u)
      })
      visited.push(v)
    })(o)
  })

  return visited.reverse()
}

test('has dependencies', () => {
  const order = topological({ 0: [1, 2], 2: [4], 4: [5, 3] })
  expect(order.toString()).toBe('0,2,4,3,5,1')
})

test.skip('has dependencies II', () => {
  const order = topological({
    0: [1,5,6],  
    2: [0,3],
    3: [5],
    5: [4],
    6: [4, 9],
    7: [6],
    8: [7],
    9: [10,11,12],
    11: [12]
  })
  expect(order.toString()).toBe('8,7,2,3,0,6,9,10,11,12,1,5,4')
})