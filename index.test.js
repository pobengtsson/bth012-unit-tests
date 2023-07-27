import { sayHello } from './index.js'

describe('sayHello', () => {
  it('returns "Hello, World!"', () => {
    expect(sayHello()).toBe('Hello, World!')
  })
})
