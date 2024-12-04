import { describe, expect, it } from 'vitest'
import { getMulInstructionsSum } from './03'

describe('03', () => {
  describe('getMulInstructionsSum', () => {
    it('returns the sum of the results of the mul instructions in the input', () => {
      expect(getMulInstructionsSum(input)).toEqual(161)
    })
  })
})

const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
