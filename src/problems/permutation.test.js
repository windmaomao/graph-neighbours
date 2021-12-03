import Dfs from '../Dfs'

const permute = (array) => {
  const n = array.length
  const indexes = new Array(n).fill(0).map((_, i) => i)
  const visited = []
  const res = []

  Dfs((i, visit) => {
    if (i >= 0) {
      visited.push(i)
      if (visited.length == n) {
        res.push([...visited])
      }
    }
    if (visited.length < n) {
      indexes.forEach(j => {
        if (visited.indexOf(j) < 0) visit(j)
      })
    }
    visited.pop()
  })(-1)
  
  return res
}

test('permute one item', () => {
  expect(permute([1]).length).toBe(1)
})

test('permute two items', () => {
  expect(permute([1, 2]).length).toBe(2)
})

test('permute three items', () => {
  expect(permute([1, 2, 3]).length).toBe(6)
})