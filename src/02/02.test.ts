import { describe, expect, it } from 'vitest'
import { getSafeReports } from './02'

describe('02', () => {
  describe('getSafeReports', () => {
    it('returns the number of safe reports for the example input', () => {
      expect(getSafeReports(input)).toEqual(2)
    })
  })
})

const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`
