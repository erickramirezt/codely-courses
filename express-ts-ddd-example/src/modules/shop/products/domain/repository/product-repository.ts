import { Product } from '../model/product'
import { ProductId } from '../value-objects/product-id'

export interface ProductRepository {
	search(id: ProductId): Promise<Product | null>

	searchAll(): Promise<Product[]>
}
