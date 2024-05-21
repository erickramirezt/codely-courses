import { AggregateRoot } from '../../../../shared/domain/model/aggregate-root'
import { Money } from '../../../../shared/domain/value-objects/money'
import { ProductId } from '../value-objects/product-id'
import { ProductImageUrlCollection } from '../value-objects/product-image-url-collection'
import { ProductName } from '../value-objects/product-name'
import { ProductViews } from '../value-objects/product-views'

export interface ProductPrimitives {
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

export class Product extends AggregateRoot<ProductPrimitives> {
	constructor(
		private readonly id: ProductId,
		private readonly name: ProductName,
		private readonly price: Money,
		private readonly imageUrls: ProductImageUrlCollection,
		private readonly views: ProductViews,
		private readonly creationDate: Date
	) {
		super()
	}

	static fromPrimitives(primitives: ProductPrimitives): Product {
		return new Product(
			new ProductId(primitives.id),
			new ProductName(primitives.name),
			{ amount: primitives.price.value, currency: primitives.price.currency },
			ProductImageUrlCollection.fromPrimitives(primitives.imageUrls),
			new ProductViews(primitives.views),
			primitives.creationDate
		)
	}

	toPrimitives(): ProductPrimitives {
		return {
			id: this.id.value,
			name: this.name.value,
			price: {
				value: this.price.amount,
				currency: this.price.currency
			},
			imageUrls: this.imageUrls.toPrimitives(),
			views: this.views.value,
			creationDate: this.creationDate
		}
	}
}
