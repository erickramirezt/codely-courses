export class ProductReviewCommentTooLongError extends Error {
  constructor (comment: string) {
    super(`Product review comment is too long: ${comment}. Max length is 500 characters`)
  }
}
