import { AggregateRoot } from '../../../../shared/domain/model/aggregate-root'
import { ProductId } from '../../../products/domain/value-objects/product-id'
import { UserId } from '../../../users/domain/value-objects/user-id'
import { UserName } from '../../../users/domain/value-objects/user-name'
import { UserProfilePicture } from '../../../users/domain/value-objects/user-profile-picture'
import { ProductReviewComment } from '../value-objects/product-review-comment'
import { ProductReviewId } from '../value-objects/product-review-id'
import { ProductReviewRating } from '../value-objects/product-review-rating'

export interface ProductReviewPrimitives {
	id: string
	userId: string
	productId: string
	rating: number
	comment: string
	userName: string
	userProfilePicture: string
}

export class ProductReview extends AggregateRoot<ProductReviewPrimitives> {
	constructor(
		readonly id: ProductReviewId,
		readonly userId: UserId,
		readonly productId: ProductId,
		readonly rating: ProductReviewRating,
		readonly comment: ProductReviewComment,
		readonly userName: UserName,
		readonly userProfilePicture: UserProfilePicture
	) {
		super()
	}

	static fromPrimitives(primitives: ProductReviewPrimitives): ProductReview {
		return new ProductReview(
			new ProductReviewId(primitives.id),
			new UserId(primitives.userId),
			new ProductId(primitives.productId),
			new ProductReviewRating(primitives.rating),
			new ProductReviewComment(primitives.comment),
			new UserName(primitives.userName),
			new UserProfilePicture(primitives.userProfilePicture)
		)
	}

	toPrimitives(): ProductReviewPrimitives {
		throw new Error('Method not implemented.')
	}
}
