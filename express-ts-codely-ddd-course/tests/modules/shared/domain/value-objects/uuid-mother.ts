import { MotherCreator } from './mother-creator'

export const UuidMother = {
  random (): string {
    return MotherCreator.random().string.uuid()
  }
}
