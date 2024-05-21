import { type Product } from '../../domain/model/product'
import { type ProductRepository } from '../../domain/repository/product-repository'

export class AllProductsSearcher {
	constructor(private readonly repository: ProductRepository) {}

	async run(): Promise<Product[]> {
		return await this.repository.searchAll()
	}
}
