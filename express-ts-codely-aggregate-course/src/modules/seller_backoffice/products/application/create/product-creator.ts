import { type Money } from '../../../../shared/domain/value-objects/value-object/money'
import { Product } from '../../domain/model/product'
import { type ProductRepository } from '../../domain/repository/product-repository'

export class ProductCreator {
  constructor (private readonly repository: ProductRepository) {}

  async run (
    id: string,
    name: string,
    price: Money,
    imageUrls: string[],
    creationDate: Date
  ): Promise<void> {
    const product = Product.create(id, name, price, imageUrls, creationDate)

    await this.repository.save(product)
  }
}
