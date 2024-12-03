export const splitLines = (input: string): string[] => input.split('\n')

export const sum = (arr: number[]): number => arr.reduce((acc, curr) => acc + curr, 0)

export const count = (arr: number[], value: number): number =>
  arr.filter(item => item === value).length
