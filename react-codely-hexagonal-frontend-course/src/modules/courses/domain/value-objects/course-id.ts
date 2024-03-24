import { Uuid } from "@/modules/shared/domain/value-objects/uuid";

export class CourseId extends Uuid {
  constructor(value: string) {
    super(value);
  }
}