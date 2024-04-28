import { type EventBus } from '../../../../shared/domain/events/event-bus'
import { UserDoesNotExistError } from '../../domain/errors/user-does-not-exist-error'
import { type User } from '../../domain/model/user'
import { type UserRepository } from '../../domain/repository/user-repository'
import { UserId } from '../../domain/value-objects/user-id'

export class UserEmailUpdater {
  constructor (
    private readonly repository: UserRepository,
    private readonly eventBus: EventBus
  ) {}

  async run (id: string, email: string): Promise<void> {
    const user = await this.findUser(id)
    user.updateEmail(email)

    await this.repository.save(user)
    await this.eventBus.publish(user.pullDomainEvents())
  }

  private async findUser (id: string): Promise<User> {
    const user = await this.repository.search(new UserId(id))

    if (user == null) {
      throw new UserDoesNotExistError(id)
    }

    return user
  }
}
