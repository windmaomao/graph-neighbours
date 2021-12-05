import Bfs from './Bfs'

test('bfs simple traverse', () => {
  const edges = { 0: [1, 2, 3], 2: [4], 4: [5] }
  const adjs = v => edges[v] || []
  const visited = []
  const marked = { 0: true }

  Bfs(q => {
    const v = q.dequeue()
    visited.push(v)

    adjs(v).forEach(u => {
      if (!marked[u]) {
        marked[u] = true
        q.enqueue(u)
      }
    })
  })(0)

  expect(visited.toString()).toBe('0,1,2,3,4,5')
})