import {left$, right$} from './solve.js'

test('left$', () => {
  const str = 'Hello (not so) cruel World!'

  expect(left$(str, 5)).toBe('Hello')
  expect(left$(str, -22)).toBe('Hello')
})
