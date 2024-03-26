import { MotherCreator } from './mother-creator'

export const StringMother = {
  word({ max, min = 1 }: { min?: number; max: number }) {
    return MotherCreator.string.word({ max, min })
  },
  words({ number }: { number: number }) {
    return MotherCreator.string.words({ number })
  },
}
