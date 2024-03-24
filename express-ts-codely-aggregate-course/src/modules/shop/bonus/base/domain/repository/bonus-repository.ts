import { type Bonus } from '../model/bonus'
import { type BonusId } from '../value-objects/bonus-id'

export interface BonusRepository {
  save: (bonus: Bonus) => Promise<void>

  search: (id: BonusId) => Promise<Bonus | null>

  searchAll: () => Promise<Bonus[]>
}
