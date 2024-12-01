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

export const sortPairs = (left: number[], right: number[]): [number[], number[]] => [
  left.sort((a, b) => a - b),
  right.sort((a, b) => a - b),
]

export const sum = (arr: number[]): number => arr.reduce((acc, curr) => acc + curr, 0)

export const count = (arr: number[], value: number): number =>
  arr.filter(item => item === value).length
