import { ImageUrl } from "@/modules/shared/domain/value-objects/image-url";

export class CourseImageUrl extends ImageUrl {
  constructor(value: string) {
    super(value);
  }
}
