import { splitLines } from '../utils'

const MIN_LEVEL_DIFF = 1
const MAX_LEVEL_DIFF = 3

export const getSafeReports = (input: string): number => {
  const reports = splitLines(input)

  return reports.map(report => report.split(' ').map(Number)).filter(isSafe).length
}

export const getSafeReportsDampener = (input: string): number => {
  const reports = splitLines(input)

  return reports.map(report => report.split(' ').map(Number)).filter(isSafeDampener).length
}

const isSafe = (level: number[]) =>
  level.every((_, index) => {
    if (index === 0) return true

    return (
      (isDecreasing(level) || isIncreasing(level)) && isWithinRange(level[index], level[index - 1])
    )
  })

const isSafeDampener = (level: number[]) => {
  return (
    level.filter((_, index) => {
      if (index === 0) return true

      return (
        (isDecreasing(level) || isIncreasing(level)) &&
        isWithinRange(level[index], level[index - 1])
      )
    }).length < 2
  )
}

const isDecreasing = (arr: number[]): boolean => arr.every((num, i) => i === 0 || num <= arr[i - 1])

const isIncreasing = (arr: number[]): boolean => arr.every((num, i) => i === 0 || num >= arr[i - 1])

const isWithinRange = (current: number, previous: number): boolean =>
  Math.abs(current - previous) >= MIN_LEVEL_DIFF && Math.abs(current - previous) <= MAX_LEVEL_DIFF
