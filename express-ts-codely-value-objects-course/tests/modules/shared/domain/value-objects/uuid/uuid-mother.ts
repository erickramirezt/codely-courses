import { Uuid } from '../../../../../../src/modules/shared/domain/value-objects/uuid'
import { MotherCreator } from '../mother-creator/mother-creator'
import { StringMother } from '../mother-creator/string/string-mother'

export const UuidMother = {
  create (value: string) {
    return new Uuid(value)
  },

  random () {
    return this.create(MotherCreator.string.uuid())
  },

  invalidUuid () {
    return StringMother.word({ max: 10 })
  }
}
