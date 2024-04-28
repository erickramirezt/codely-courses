import { type EventBus } from '../../../../shared/domain/events/event-bus'
import { type UserRepository } from '../../domain/repository/user-repository'
import { UserFinder } from '../find/user-finder'

export class UserArchiver {
  private readonly finder: UserFinder

  constructor (
    private readonly repository: UserRepository,
    private readonly eventBus: EventBus
  ) {
    this.finder = new UserFinder(repository)
  }

  async run (id: string): Promise<void> {
    const user = await this.finder.run(id)

    user.archive()

    await this.repository.save(user)
    await this.eventBus.publish(user.pullDomainEvents())
  }
}
