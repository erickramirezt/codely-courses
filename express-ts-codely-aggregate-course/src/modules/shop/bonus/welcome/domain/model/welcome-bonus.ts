import { Bonus } from '../../../base/domain/model/bonus'
import { type BonusId } from '../../../base/domain/value-objects/bonus-id'
import { BonusReward } from '../../../base/domain/value-objects/bonus-reward'
import { type WelcomeBonusSticker } from '../value-objects/welcome-bonus-sticker'

export class WelcomeBonus extends Bonus {
  constructor (
    readonly id: BonusId,
    readonly sticker: WelcomeBonusSticker
  ) {
    super(id, BonusReward.TEN_PERCENT_DISCOUNT)
  }
}
