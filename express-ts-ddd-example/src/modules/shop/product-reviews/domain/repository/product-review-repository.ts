import { ProductId } from '../../../products/domain/value-objects/product-id'
import { ProductReview } from '../model/product-review'

export interface ProductReviewRepository {
	save: (productReview: ProductReview) => Promise<void>

	searchByProduct: (productId: ProductId) => Promise<ProductReview[]>
}
