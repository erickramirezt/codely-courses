import { MotherCreator } from './mother-creator'

export const StringMother = {
  uuid () {
    return MotherCreator.string.uuid()
  },
  word ({ max, min = 1 }: { min?: number, max: number }) {
    return MotherCreator.string.word({ max, min })
  }
}
