import { type NewableClass } from '../../../../shared/domain/newable-class'
import { type ValueObject } from '../../../../shared/domain/value-objects/value-object'

export const ValueObjetTranmsformer = (
  ValueObject: NewableClass<ValueObject<any>>
): {
    to: (value: ValueObject<any>) => any
    from: (value: any) => ValueObject<any>
  } => {
  return {
    to: (value: ValueObject<any>): any => value.value,
    from: (value: any): ValueObject<any> => new ValueObject(value)
  }
}
