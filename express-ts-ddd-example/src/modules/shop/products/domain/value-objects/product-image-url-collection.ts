import { Collection } from '../../../../shared/domain/model/collection'
import { ProductImageUrl } from './product-image-url'

export class ProductImageUrlCollection extends Collection<ProductImageUrl, string> {
	static fromPrimitives(value: string[]): ProductImageUrlCollection {
		return new ProductImageUrlCollection(value.map((url) => new ProductImageUrl(url)))
	}

	toJSON(): string {
		return JSON.stringify(this.toPrimitives())
	}

	toPrimitives(): string[] {
		return this.value.map((url) => url.value)
	}
}
