import { AggregateRoot } from '../../../../shared/domain/model/aggregate-root'
import { Money } from '../../../../shared/domain/value-objects/money'
import { ProductFeaturedReview } from '../value-objects/product-featured-review'
import { ProductId } from '../value-objects/product-id'
import { ProductImageUrlCollection } from '../value-objects/product-image-url-collection'
import { ProductName } from '../value-objects/product-name'
import { ProductRating } from '../value-objects/product-rating'

export interface ProductPrimitives {
	id: string
	name: string
	price: {
		amount: number
		currency: 'EUR' | 'USD'
	}
	imageUrls: string[]
	featuredReview: {
		comment: string
		rating: number
	} | null
	rating: number | null
}

export class Product extends AggregateRoot<ProductPrimitives> {
	constructor(
		private readonly id: ProductId,
		private readonly name: ProductName,
		private readonly price: Money,
		private readonly imageUrls: ProductImageUrlCollection,
		private readonly featuredReview: ProductFeaturedReview | null,
		private readonly rating: ProductRating | null
	) {
		super()
	}

	static create(primitives: ProductPrimitives): Product {
		return new Product(
			new ProductId(primitives.id),
			new ProductName(primitives.name),
			{
				amount: primitives.price.amount,
				currency: primitives.price.currency
			},
			ProductImageUrlCollection.fromPrimitives(primitives.imageUrls),
			primitives.featuredReview !== null
				? ProductFeaturedReview.fromPrimitives(primitives.featuredReview)
				: null,
			primitives.rating !== null ? new ProductRating(primitives.rating) : null
		)
	}

	toPrimitives(): ProductPrimitives {
		return {
			id: this.id.value,
			name: this.name.value,
			price: {
				amount: this.price.amount,
				currency: this.price.currency
			},
			imageUrls: this.imageUrls.toPrimitives(),
			featuredReview: this.featuredReview !== null ? this.featuredReview.toPrimitives() : null,
			rating: this.rating !== null ? this.rating.value : null
		}
	}
}
