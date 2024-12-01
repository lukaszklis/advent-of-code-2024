import { getSortedPairs, normalizeInput } from './utils'

export const getDistances = (input: string): number => {
  const [left, right] = normalizeInput(input)
  const [sortedLeft, sortedRight] = getSortedPairs(left, right)

  const distances = sortedLeft.map((leftCoordinate, index) =>
    Math.abs(leftCoordinate - sortedRight[index])
  )

  return distances.reduce((acc, curr) => acc + curr, 0)
}

export const getSimilarityScore = (input: string): number => {
  const [left, right] = normalizeInput(input)

  const similarityScore = left.map(leftCoordinate => {
    const count = right.filter(rightCoordinate => rightCoordinate === leftCoordinate).length

    return leftCoordinate * count
  })

  return similarityScore.reduce((acc, curr) => acc + curr, 0)
}
