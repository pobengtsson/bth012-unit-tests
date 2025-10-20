import { describe, it, expect } from 'vitest'
import { factorial } from './factorial.js'

describe('factorial', () => {
  describe('when positive small integers', () => {
    it('calculates the factorial of 3', () => {
      expect(factorial(3)).toEqual(6)
    })
    it('calculates the factorial of 4', () => {
      expect(factorial(4)).toEqual(24)
    })
  })
  describe('when zero', () => {
    it('calculates the factorial of 0', () => {
      expect(factorial(0)).toEqual(1)
    })
  })
})
