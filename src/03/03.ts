import { sum } from '../utils'

export const getMulInstructionsSum = (input: string): number => {
  const mulInstructions = input.match(/mul\(([\d,]+)\)/g)

  if (!mulInstructions) return 0

  return sum(
    mulInstructions
      .map(instruction => instruction.replace('mul(', '').replace(')', ''))
      .map(instruction => instruction.split(',').map(Number))
      .map(([num1, num2]) => num1 * num2)
  )
}
