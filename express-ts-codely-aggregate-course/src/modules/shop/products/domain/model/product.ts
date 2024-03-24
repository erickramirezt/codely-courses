import { type Money } from '../../../../shared/domain/value-objects/value-object/money'
import { ProductId } from '../value-objects/product-id'
import {
  type ProductFeaturedReviewPrimitives,
  ProductFeaturedReview
} from '../value-objects/product-featured-review'
import { ProductImageUrls } from '../value-objects/product-image-urls'
import { ProductName } from '../value-objects/product-name'
import { ProductRating } from '../value-objects/product-rating'

export interface ProductPrimitives {
  id: string
  name: string
  price: {
    amount: number
    currency: string
  }
  imageUrls: string[]
  featuredReview?: {
    comment: string
    rating: number
  } | null
  rating?: number | null
}

export class Product {
  public readonly id: ProductId
  public readonly name: ProductName
  public readonly price: Money
  public readonly imageUrls: ProductImageUrls
  public readonly featuredReview?: ProductFeaturedReview | null

  public readonly rating?: ProductRating | null

  constructor (
    id: string,
    name: string,
    price: Money,
    imageUrls: string[],
    featuredReview?: ProductFeaturedReviewPrimitives | null,
    rating?: number | null
  ) {
    this.id = new ProductId(id)
    this.name = new ProductName(name)
    this.price = price
    this.imageUrls = ProductImageUrls.fromPrimitives(imageUrls)
    this.featuredReview =
      featuredReview != null
        ? ProductFeaturedReview.fromPrimitives(featuredReview)
        : null
    this.rating = rating != null ? new ProductRating(rating) : null
  }

  static create (
    id: string,
    name: string,
    price: Money,
    imageUrls: string[],
    featuredReview?: ProductFeaturedReviewPrimitives | null,
    rating?: number | null
  ): Product {
    return new Product(id, name, price, imageUrls, featuredReview, rating)
  }

  toPrimitives (): ProductPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      price: {
        amount: this.price.amount,
        currency: this.price.currency
      },
      imageUrls: this.imageUrls.toPrimitives(),
      featuredReview:
        this.featuredReview != null ? this.featuredReview.toPrimitives() : null,
      rating: this.rating != null ? this.rating.value : null
    }
  }
}
