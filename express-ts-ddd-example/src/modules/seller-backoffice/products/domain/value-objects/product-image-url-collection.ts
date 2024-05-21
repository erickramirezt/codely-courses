import { Collection } from '../../../../shared/domain/model/collection'
import { ProductImageUrl } from './product-image-url'

export class ProductImageUrlCollection extends Collection<ProductImageUrl, string> {
	static fromPrimitives(primitives: string[]): ProductImageUrlCollection {
		return new ProductImageUrlCollection(primitives.map((_) => new ProductImageUrl(_)))
	}

	toJSON(): string {
		return JSON.stringify(this.value)
	}

	toPrimitives(): string[] {
		return this.value.map((_) => _.value)
	}
}
