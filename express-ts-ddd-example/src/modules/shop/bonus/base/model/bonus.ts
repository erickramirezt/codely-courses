import { BonusReward } from '../value-objects/bonus-reward'
import { BonusId } from '../value-objects/bous-id'

export abstract class Bonus {
	constructor(
		readonly id: BonusId,
		readonly name: BonusReward
	) {}
}
