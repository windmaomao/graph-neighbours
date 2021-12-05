import PathTo from './pathTo'
import Dfs from './dfs'
import Bfs from './bfs'

test('dfs get path', () => {
  const edges = { 
    0: [2, 1, 5],
    1: [0, 2], 
    2: [0, 1, 3, 4],
    3: [2, 4, 5], 
    4: [2, 3],
    5: [0, 3] 
  }
  const adjs = v => edges[v] || []
  const marked = []
  const edgeTo = {}

  Dfs((v, next) => {
    marked[v] = true
    adjs(v).forEach(u => {
      if (!marked[u]) {
        edgeTo[u] = v
        next(u)
      }
    })
  })(0)

  const p = PathTo(0, edgeTo)
  expect(p(5).toString()).toBe('0,2,3,5')
})

test('bfs get path', () => {
  const edges = {
    0: [2, 1, 5],
    1: [0, 2],
    2: [0, 1, 3, 4],
    3: [2, 4, 5],
    4: [2, 3],
    5: [0, 3]
  }
  const adjs = v => edges[v] || []
  const marked = []
  const edgeTo = {}

  Bfs(q => {
    const v = q.dequeue()

    adjs(v).forEach(u => {
      if (!marked[u]) {
        marked[u] = true
        edgeTo[u] = v
        q.enqueue(u)
      }
    })
  })(0)

  const p = PathTo(0, edgeTo)
  expect(p(5).toString()).toBe('0,5')
})