import { Bonus } from '../../../base/domain/model/bonus'
import { type BonusId } from '../../../base/domain/value-objects/bonus-id'
import { BonusReward } from '../../../base/domain/value-objects/bonus-reward'

export class DailyBonus extends Bonus {
  constructor (id: BonusId) {
    super(id, BonusReward.ONE_CODELIRA)
  }
}
