import { describe, it, expect } from 'vitest'
import { sayHello } from './index.js'

describe('sayHello', () => {
  it('returns "Hello, World!"', () => {
    expect(sayHello()).toEqual('Hello, World!')
  })
})
