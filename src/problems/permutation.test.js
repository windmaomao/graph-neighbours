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
  const dfs = Dfs(() => indexes)

  const visited = []
  const res = []

  dfs(-1, {
    step: (i) => { 
      if (i >= 0) {
        visited.push(i)
        if (visited.length === n) {
          res.push([...visited])
          return false
        }
      }
    },
    pick: (i) => visited.indexOf(i) < 0,
    back: () => { visited.pop() },
  })
  
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