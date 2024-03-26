import { ImageUrl } from "@/modules/shared/domain/value-objects/image-url";

export class CourseImageUrl extends ImageUrl {
  constructor(readonly value: string) {
    super(value);
  }

  static invalidMessage(value: string): string {
    return `Invalid image URL: ${value}`;  
  }
}
