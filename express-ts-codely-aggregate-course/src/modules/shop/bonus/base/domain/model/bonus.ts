import { type BonusId } from '../value-objects/bonus-id'
import { type BonusReward } from '../value-objects/bonus-reward'

export abstract class Bonus {
  constructor (
    readonly id: BonusId,
    public $name: BonusReward
  ) {}
}
