import { ProductNotExistError } from '../../domain/errors/product-not-exist-error'
import { type Product } from '../../domain/model/product'
import { type ProductRepository } from '../../domain/repository/product-repository'
import { ProductId } from '../../domain/value-objects/product-id'

export class ProductFinder {
  constructor (private readonly repository: ProductRepository) {}

  async run (id: string): Promise<Product> {
    const product = await this.repository.search(new ProductId(id))
    if (product == null) {
      throw new ProductNotExistError(id)
    }
    return product
  }
}
