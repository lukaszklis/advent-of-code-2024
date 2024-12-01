import { count, normalizeInput, sortPairs, sum } from './utils'

export const getDistances = (input: string): number => {
  const [left, right] = sortPairs(...normalizeInput(input))

  return sum(left.map((coordinate, index) => Math.abs(coordinate - right[index])))
}

export const getSimilarityScore = (input: string): number => {
  const [left, right] = normalizeInput(input)

  return sum(left.map(coordinate => coordinate * count(right, coordinate)))
}
