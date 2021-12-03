import Dfs from '../Dfs'

const permute = (array) => {
  const n = array.length
  const indexes = new Array(n).fill(0).map((_, i) => i)
  const res = []

  Dfs((curr, visit) => {
    if (curr.length == n) {
      res.push([...curr])
      return
    }
    indexes.forEach(j => {
      if (curr.indexOf(j) < 0) visit([...curr, j])
    })
  })([])

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