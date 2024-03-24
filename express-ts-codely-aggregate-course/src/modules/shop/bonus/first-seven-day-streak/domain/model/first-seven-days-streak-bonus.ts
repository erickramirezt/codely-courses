import { Bonus } from '../../../base/domain/model/bonus'
import { type BonusId } from '../../../base/domain/value-objects/bonus-id'
import { BonusReward } from '../../../base/domain/value-objects/bonus-reward'

export class FirstSevenDaysStreakBonus extends Bonus {
  constructor (readonly id: BonusId) {
    super(id, BonusReward.TEN_PERCENT_DISCOUNT)
  }
}
