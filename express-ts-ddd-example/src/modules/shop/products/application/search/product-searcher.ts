import { SearchProductRequest } from '../../../../seller-backoffice/products/application/search/product-searcher'
import { Product } from '../../domain/model/product'
import { ProductRepository } from '../../domain/repository/product-repository'
import { ProductId } from '../../domain/value-objects/product-id'

export interface SeacherProductRequest {
	id: string
}

export class ProductSearcher {
	constructor(private readonly repository: ProductRepository) {}

	async run(request: SearchProductRequest): Promise<Product | null> {
		return await this.repository.search(new ProductId(request.id))
	}
}
