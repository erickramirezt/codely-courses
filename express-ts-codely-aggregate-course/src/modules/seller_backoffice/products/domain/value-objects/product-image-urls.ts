import { Collection } from '../../../../shared/domain/value-objects/value-object/collection'
import { ProductImageUrl } from './product-image-url'

export class ProductImageUrls extends Collection<ProductImageUrl> {
  static fromPrimitives (value: string[]): ProductImageUrls {
    return new ProductImageUrls(value.map(value => new ProductImageUrl(value)))
  }

  toJSON (): string {
    return JSON.stringify(this.value)
  }

  toPrimitives (): string[] {
    return this.value.map(value => value.value)
  }
}
