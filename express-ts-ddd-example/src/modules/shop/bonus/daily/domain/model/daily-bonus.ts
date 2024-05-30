import { Bonus } from '../../../base/model/bonus'
import { BonusReward } from '../../../base/value-objects/bonus-reward'
import { BonusId } from '../../../base/value-objects/bous-id'

export class DailyBonus extends Bonus {
	constructor(id: BonusId) {
		super(id, BonusReward.ONE_CODELIRA)
	}
}
