import riverSizes from './river-sizes'

test('can solve river sizes', () => {
  const res = riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ])
  expect(res.toString()).toBe('2,1,5,2,2')
})

test('can solve non square sizes', () => {
  const res = riverSizes([
    [1,1,1,0,1,1,0,0,0,1,0]
  ])
  expect(res.toString()).toBe('3,2,1')
})

test('can solve convoluted shape', () => {
  const res = riverSizes([
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1]	
  ])
  expect(res.toString()).toBe('2,1,21,5,2,1')
})
