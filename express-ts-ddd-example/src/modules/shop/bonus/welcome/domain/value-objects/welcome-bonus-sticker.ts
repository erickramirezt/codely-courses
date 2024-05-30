import { StringValueObject } from '../../../../../shared/domain/value-objects/value-object/string-value-object'

export class WelcomeBonusSticker extends StringValueObject {
	constructor(readonly value: string) {
		super(value)
	}
}
