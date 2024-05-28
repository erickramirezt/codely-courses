import { ProductId } from '../../../products/domain/value-objects/product-id'
import { ProductReview } from '../../domain/model/product-review'
import { ProductReviewRepository } from '../../domain/repository/product-review-repository'

export interface SearchProductReviewByProductIdRequest {
	productId: string
}

export class ProductReviewsByProductSearcher {
	constructor(private readonly repository: ProductReviewRepository) {}

	async run(request: SearchProductReviewByProductIdRequest): Promise<ProductReview[]> {
		return this.repository.searchByProduct(new ProductId(request.productId))
	}
}
