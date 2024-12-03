import { count, splitLines, sum } from '../utils'

export const getDistances = (input: string): number => {
  const [left, right] = normalizeInput(input)

  left.sort((a, b) => a - b)
  right.sort((a, b) => a - b)

  return sum(left.map((coordinate, index) => Math.abs(coordinate - right[index])))
}

export const getSimilarityScore = (input: string): number => {
  const [left, right] = normalizeInput(input)

  return sum(left.map(coordinate => coordinate * count(right, coordinate)))
}

const normalizeInput = (input: string): [number[], number[]] => {
  const lines = splitLines(input)
  const left: number[] = []
  const right: number[] = []

  lines.map(line => {
    const [leftCoordinate, rightCoordinate] = line.split('   ').map(Number)

    left.push(leftCoordinate)
    right.push(rightCoordinate)
  })

  return [left.sort((a, b) => a - b), right.sort((a, b) => a - b)]
}
