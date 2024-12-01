export const normalizeInput = (input: string): [number[], number[]] => {
  const lines = input.split('\n')
  const left: number[] = []
  const right: number[] = []

  lines.map(line => {
    const [leftCoordinate, rightCoordinate] = line.split('   ').map(Number)

    left.push(leftCoordinate)
    right.push(rightCoordinate)
  })

  return [left.sort((a, b) => a - b), right.sort((a, b) => a - b)]
}

export const getSortedPairs = (left: number[], right: number[]): [number[], number[]] => [
  left.sort((a, b) => a - b),
  right.sort((a, b) => a - b),
]
