import Dfs from '../Dfs'

// Original permutation algorithm
// const permutation = (array) => {
//   const n = array.length
//   const res = []
//   const units = new Array(n).fill(0).map((_, i) => i)

//   const visit = (curr) => {
//     if (curr.length == n) {
//       res.push(curr.map(i => array[i]))
//       return
//     }

//     units.filter(v => curr.indexOf(v) < 0)
//       .forEach(v => { visit([...curr, v]) })
//   }

//   visit([])
//   console.log(res)
// }

const permute = (array) => {
  const n = array.length
  const indexes = new Array(n).fill(0).map((_, i) => i)
  const visited = []
  const res = []

  Dfs((i, adjs, visit) => {
    if (i >= 0) {
      visited.push(i)
      if (visited.length == n) {
        res.push([...visited])
      }
    }
    if (visited.length < n) {
      adjs(i).forEach(j => {
        if (visited.indexOf(j) < 0) visit(j)
      })
    }
    visited.pop()
  }, () => indexes)(-1)
  
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