import { Product } from '../../domain/model/product'
import { ProductRepository } from '../../domain/repository/product-repository'

export class AllProductsSeacher {
	constructor(private readonly repository: ProductRepository) {}

	async run(): Promise<Product[]> {
		return await this.repository.searchAll()
	}
}
