import { Uuid } from '../../../../../src/modules/shared/domain/value-objects/uuid'
import { StringMother } from './mother-creator/string-mother'

export const UuidMother = {
  create (value?: string) {
    return new Uuid(value ?? StringMother.uuid())
  },

  createInvalid () {
    return StringMother.word({ max: 10 })
  }
}
