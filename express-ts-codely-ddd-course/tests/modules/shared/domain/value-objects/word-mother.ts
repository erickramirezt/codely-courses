import { MotherCreator } from './mother-creator'

export const WordMother = {
  random ({
    minLength = 1,
    maxLength
  }: {
    minLength?: number
    maxLength: number
  }): string {
    return (
      MotherCreator.random().lorem.word(
        Math.floor(Math.random() * (maxLength - minLength)) + minLength
      ) ?? 'word'
    )
  }
}
