import { type ProductFinder } from '../../../products/application/finder/product-finder'
import { type UserFinder } from '../../../users/application/find/user-finder'
import { ProductReview } from '../../domain/model/product-review'
import { type ProductReviewRepository } from '../../domain/repository/product-review-repository'

export class ProductReviewCreator {
  constructor (
    private readonly repository: ProductReviewRepository,
    private readonly userFinder: UserFinder,
    private readonly productFinder: ProductFinder
  ) {}

  async run (
    id: string,
    userId: string,
    productId: string,
    rating: number,
    comment: string
  ): Promise<void> {
    await this.validateProductExists(productId)

    const user = await this.userFinder.run(userId)

    const productReview = ProductReview.create({
      id,
      userId,
      productId,
      rating,
      comment,
      userName: user.name.value,
      userProfilePicture: user.profilePicture.value
    })

    await this.repository.save(productReview)
  }

  private async validateProductExists (productId: string): Promise<void> {
    await this.productFinder.run(productId)
  }
}
