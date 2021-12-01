import Graph from './graph'

test('can create graph', () => {
  const g = Graph({})
  expect(typeof g.neighbours).toBe('function')
})

test('can create with neighbours map', () => {
  const g = Graph({ 0: [1] })
  expect(g.neighbours(0)[0]).toBe(1)
})

test('can create with neighbours function', () => {
  const g = Graph((v) => [1])
  expect(g.neighbours(0)[0]).toBe(1)
})

test('can perform traversal', () => {
  const g = Graph({ 0: [1], 1: [2], 3: [4], 4: [5] })
  const res = []
  g.traverse(0, v => { res.push(v) })
  expect(`${res}`).toBe('0,1,2')
})

test('can perform dfs traversal', () => {
  const g = Graph({ 0: [1, 3], 1: [2], 3: [4], 4: [5] })
  const res = []
  g.dfs(0, v => { res.push(v) })
  expect(`${res}`).toBe('0,3,4,5,1,2')
})

test('can perform bfs traversal', () => {
  const g = Graph({ 0: [1, 3], 1: [2], 3: [4], 4: [5] })
  const res = []
  g.bfs(0, v => { res.push(v) })
  expect(`${res}`).toBe('0,1,3,2,4,5')
})

test.skip('can detect cycle', () => {
  let hasCycle = false
  const g = Graph({ 0: [1, 3], 1: [2], 3: [4], 4: [5] })
  g.traverse(0, null, {
    nextCb: (v, p, visited) => {
      if (visited) {
        if (v != p) {
          console.log(v, p)
          hasCycle = true
        }
      }
    }
  })
  expect(hasCycle).toBe(false)
})