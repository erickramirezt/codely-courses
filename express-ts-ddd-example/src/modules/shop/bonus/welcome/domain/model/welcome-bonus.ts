import { Bonus } from '../../../base/model/bonus'
import { BonusReward } from '../../../base/value-objects/bonus-reward'
import { BonusId } from '../../../base/value-objects/bous-id'
import { WelcomeBonusSticker } from '../value-objects/welcome-bonus-sticker'

export class WelcomeBonus extends Bonus {
	constructor(
		readonly id: BonusId,
		readonly sticker: WelcomeBonusSticker
	) {
		super(id, BonusReward.TEN_PERCENT_DISCOUNT)
	}
}
