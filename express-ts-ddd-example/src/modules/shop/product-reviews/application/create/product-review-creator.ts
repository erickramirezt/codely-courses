import { ProductFinder } from '../../../products/application/finder/product-finder'
import { UserFinder } from '../../../users/application/find/user-finder'
import { ProductReview } from '../../domain/model/product-review'
import { ProductReviewRepository } from '../../domain/repository/product-review-repository'

export interface CreateProductReviewRequest {
	id: string
	productId: string
	userId: string
	rating: number
	comment: string
}

export class ProductReviewCreator {
	constructor(
		private readonly repository: ProductReviewRepository,
		private readonly userFinder: UserFinder,
		private readonly productFinder: ProductFinder
	) {}

	async run(request: CreateProductReviewRequest): Promise<void> {
		await this.validateProductExists({ productId: request.productId })

		const user = await this.userFinder.run({ id: request.userId })

		const productReview = ProductReview.fromPrimitives({
			...request,
			userName: user.name.value,
			userProfilePicture: user.profilePicture.value
		})
	}

	private async validateProductExists(props: { productId: string }) {
		await this.productFinder.run({ id: props.productId })
	}
}
