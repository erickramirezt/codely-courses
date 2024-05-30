import { Bonus } from '../model/bonus'
import { BonusId } from '../value-objects/bous-id'

export interface BonusRepository {
	save(bonus: Bonus): Promise<void>

	search(id: BonusId): Promise<Bonus | null>

	searchAll(): Promise<Bonus[]>
}
