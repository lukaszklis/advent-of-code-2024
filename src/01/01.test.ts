import { describe, expect, it } from 'vitest'
import { getDistances, getSimilarityScore } from './01'
import input, { exampleInput } from './01.input'

describe('01', () => {
  describe('getDistances', () => {
    it('returns distances for the example input', () => {
      expect(getDistances(exampleInput)).toEqual(11)
    })

    it('returns distances for the actual input', () => {
      expect(getDistances(input)).toEqual(2113135)
    })
  })

  describe('getSimilarityScore', () => {
    it('returns the similarity score for the example input', () => {
      expect(getSimilarityScore(exampleInput)).toEqual(31)
    })

    it('returns the similarity score for the actual input', () => {
      expect(getSimilarityScore(input)).toEqual(19097157)
    })
  })
})
