import { type Money } from '../../../../shared/domain/value-objects/value-object/money'
import { ProductId } from '../value-objects/product-id'
import { ProductImageUrls } from '../value-objects/product-image-urls'
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

export class Product {
  public readonly id: ProductId
  public readonly name: ProductName
  public readonly price: Money
  public readonly imageUrls: ProductImageUrls
  public readonly views: ProductViews
  public readonly creationDate: Date

  constructor (id: string, name: string, price: Money, imageUrls: string[], views: number, creationDate: Date) {
    this.id = new ProductId(id)
    this.name = new ProductName(name)
    this.price = price
    this.imageUrls = ProductImageUrls.fromPrimitives(imageUrls)
    this.views = new ProductViews(views)
    this.creationDate = creationDate
  }

  static create (id: string, name: string, price: Money, imageUrls: string[], creationDate: Date): Product {
    return new Product(id, name, price, imageUrls, ProductViews.initialice().value, creationDate)
  }

  toPrimitives (): ProductPrimitives {
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
