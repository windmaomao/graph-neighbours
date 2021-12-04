import Dfs from '../Dfs'

const hasSingleCycle = (arr) => {
  const n = arr.length

  const next = i => {
    const v = arr[i]
    let j = (i + v) % n
    if (j < 0) j += n
    if (j >= n) j -= n
    return j
  }

  const marked = {}
  const visited = []

  Dfs((i, visit) => {
    visited.push(i)
    marked[i] = true
    
    const j = next(i)
    if (!marked[j]) visit(j)
  })(0)

  return (visited.length === n )
    && (next(visited[n - 1]) === 0)
}

test.only('has single cycle', () => {
  const arr = [2, 3, 1, -4, -4, 2]
  expect(hasSingleCycle(arr)).toBe(true)
})

test('has no single cycle', () => {
  const arr = [0, 1, 1, 1, 1]
  expect(hasSingleCycle(arr)).toBe(false)
})

test('has no single cycle II', () => {
  const arr = [1, 1, 0, 1, 1]
  expect(hasSingleCycle(arr)).toBe(false)
})

test('has no single cycle III', () => {
  const arr = [3, 5, 5, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2]
  expect(hasSingleCycle(arr)).toBe(false)
})

test('has no single cycle IV', () => {
  const arr = [1, 1, 1, 1, 2]
  expect(hasSingleCycle(arr)).toBe(false)
})

