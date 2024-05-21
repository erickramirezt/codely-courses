import { ProductNotExistError } from '../../domain/errors/product-not-exist-error'
import { Product } from '../../domain/model/product'
import { ProductRepository } from '../../domain/repository/product-repository'
import { ProductId } from '../../domain/value-objects/product-id'

export interface FindProductRequest {
	id: string
}

export class ProductFinder {
	constructor(private readonly repository: ProductRepository) {}

	async run(request: FindProductRequest): Promise<Product> {
		const product = await this.repository.search(new ProductId(request.id))

		if (product === null) {
			throw new ProductNotExistError(request.id)
		}

		return product
	}
}
