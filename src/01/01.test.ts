import { describe, expect, it } from 'vitest'
import { getDistances, getSimilarityScore } from './01'

describe('01', () => {
  describe('getDistances', () => {
    it('returns distances for the example input', () => {
      expect(getDistances(input)).toEqual(11)
    })
  })

  describe('getSimilarityScore', () => {
    it('returns the similarity score for the example input', () => {
      expect(getSimilarityScore(input)).toEqual(31)
    })
  })
})

const input = `3   4
4   3
2   5
1   3
3   9
3   3`
