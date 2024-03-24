import { ProductId } from '../../../products/domain/value-objects/product-id'
import { UserId } from '../../../users/domain/value-objects/user-id'
import { UserName } from '../../../users/domain/value-objects/user-name'
import { UserProfilePicture } from '../../../users/domain/value-objects/user-profile-picture'
import { ProductReviewComment } from '../value-objects/product-review-comment'
import { ProductReviewRating } from '../value-objects/product-review-rating'
import { ProductReviewId } from '../value-objects/product.review-id'

export interface ProductReviewPrimitives {
  id: string
  userId: string
  productId: string
  rating: number
  comment: string
  userName: string
  userProfilePicture: string
}

export class ProductReview {
  readonly id: ProductReviewId
  readonly userId: UserId
  readonly productId: ProductId
  readonly rating: ProductReviewRating
  readonly comment: ProductReviewComment
  readonly userName: UserName
  readonly userProfilePicture: UserProfilePicture

  constructor (
    id: string,
    userId: string,
    productId: string,
    rating: number,
    comment: string,
    userName: string,
    userProfilePicture: string
  ) {
    this.id = new ProductReviewId(id)
    this.userId = new UserId(userId)
    this.productId = new ProductId(productId)
    this.rating = new ProductReviewRating(rating)
    this.comment = new ProductReviewComment(comment)
    this.userName = new UserName(userName)
    this.userProfilePicture = new UserProfilePicture(userProfilePicture)
  }

  static create (primitives: ProductReviewPrimitives): ProductReview {
    return new ProductReview(
      primitives.id,
      primitives.userId,
      primitives.productId,
      primitives.rating,
      primitives.comment,
      primitives.userName,
      primitives.userProfilePicture
    )
  }

  toPrimitives (): ProductReviewPrimitives {
    return {
      id: this.id.value,
      userId: this.userId.value,
      productId: this.productId.value,
      rating: this.rating.value,
      comment: this.comment.value,
      userName: this.userName.value,
      userProfilePicture: this.userProfilePicture.value
    }
  }
}
