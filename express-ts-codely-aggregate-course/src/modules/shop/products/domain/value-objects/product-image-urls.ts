import { Collection } from '../../../../shared/domain/value-objects/value-object/collection'
import { ProductImageUrl } from './product-image-url'

export class ProductImageUrls extends Collection<ProductImageUrl> {
  static fromPrimitives (value: string[]): ProductImageUrls {
    return new ProductImageUrls(value.map((url) => new ProductImageUrl(url)))
  }

  toJSON (): string {
    return JSON.stringify(this.toPrimitives())
  }

  toPrimitives (): string[] {
    return this.value.map((url) => url.value)
  }
}
