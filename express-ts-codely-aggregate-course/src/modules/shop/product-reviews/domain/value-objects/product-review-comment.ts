import { StringValueObject } from '../../../../shared/domain/value-objects/value-object/string-value-object'
import { ProductReviewCommentTooLongError } from '../errors/product-review-comment-too-long-error'

export class ProductReviewComment extends StringValueObject {
  private static readonly MIN_LENGTH = 1
  private static readonly MAX_LENGTH = 500

  constructor (value: string) {
    super(value)
    this.validateProductReviewComment(value)
  }

  private validateProductReviewComment (value: string): void {
    if (
      value.length < ProductReviewComment.MIN_LENGTH ||
      value.length > ProductReviewComment.MAX_LENGTH
    ) {
      throw new ProductReviewCommentTooLongError(value)
    }
  }
}
