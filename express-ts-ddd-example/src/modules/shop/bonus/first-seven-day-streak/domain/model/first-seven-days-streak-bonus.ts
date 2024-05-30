import { Bonus } from '../../../base/model/bonus'
import { BonusReward } from '../../../base/value-objects/bonus-reward'
import { BonusId } from '../../../base/value-objects/bous-id'

export class FirstSevenDaysStreakBonus extends Bonus {
	constructor(readonly id: BonusId) {
		super(id, BonusReward.TEN_PERCENT_DISCOUNT)
	}
}
