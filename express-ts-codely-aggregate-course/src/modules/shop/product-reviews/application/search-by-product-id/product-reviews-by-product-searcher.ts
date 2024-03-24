import { ProductId } from '../../../products/domain/value-objects/product-id'
import { type ProductReview } from '../../domain/model/product-review'
import { type ProductReviewRepository } from '../../domain/repository/product-review-repository'

export class ProductReviewsByProductSearcher {
  constructor (private readonly repository: ProductReviewRepository) {}

  async run (productId: string): Promise<ProductReview[]> {
    return await this.repository.searchByProduct(new ProductId(productId))
  }
}
