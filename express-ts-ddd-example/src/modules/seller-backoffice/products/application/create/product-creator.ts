import { Product } from '../../domain/model/product'
import { ProductRepository } from '../../domain/repository/product-repository'

export interface CreateProductRequest {
	id: string
	name: string
	price: {
		value: number
		currency: 'EUR' | 'USD'
	}
	imageUrls: string[]
	views: number
	creationDate: Date
}

export class ProductCreator {
	constructor(private readonly repository: ProductRepository) {}

	async run(request: CreateProductRequest): Promise<void> {
		const product = Product.fromPrimitives({ ...request })

		await this.repository.save(product)
	}
}
