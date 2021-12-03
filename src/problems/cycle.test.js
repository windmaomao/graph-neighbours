import Dfs from '../Dfs'

const hasCycle = (adj) => {
  const marked = []
  let cycle = false
  const dfs = Dfs(adj)

  dfs(0, {
    step: (v) => {
      marked[v] = true
    },
    pick: (v, p) => {
      const visited = !!marked[v]
      if (visited && v != p) {
        cycle = true
      }
      return !visited
    }
  })

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