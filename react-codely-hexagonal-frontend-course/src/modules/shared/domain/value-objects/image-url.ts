import { BadRequestError } from '../errors/bad-request-error'
import { StringValueObject } from './value-object/string-value-object'

export class ImageUrl extends StringValueObject {
  constructor(readonly value: string) {
    super(value)
    if (!ImageUrl.isValid(value)) {
      throw new BadRequestError(ImageUrl.invalidMessage(value))
    }
  }

  static isValid(value: string) {
    return /^https?:\/\/.*\.(png|jpg|jpeg|gif)$/.test(value)
  }

  static invalidMessage(value: string) {
    return `The image url [${value}] is invalid.`
  }
}
