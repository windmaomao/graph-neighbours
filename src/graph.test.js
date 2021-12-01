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