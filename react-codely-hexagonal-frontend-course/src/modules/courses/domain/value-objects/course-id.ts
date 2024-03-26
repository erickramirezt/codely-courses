import { Uuid } from "@/modules/shared/domain/value-objects/uuid";

export class CourseId extends Uuid {
  constructor(readonly value: string) {
    super(value);
  }
}