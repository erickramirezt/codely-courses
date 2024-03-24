import { type Product } from '../../domain/model/product'
import { type ProductRepository } from '../../domain/repository/product-repository'
import { ProductId } from '../../domain/value-objects/product-id'

export class ProductSearcher {
  constructor (private readonly repository: ProductRepository) {}

  async run (id: string): Promise<Product | null> {
    return await this.repository.search(new ProductId(id))
  }
}
