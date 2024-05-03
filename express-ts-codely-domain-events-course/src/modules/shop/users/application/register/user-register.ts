import { type EventBus } from '../../../../shared/domain/events/event-bus'
import { User } from '../../domain/model/user'
import { type UserRepository } from '../../domain/repository/user-repository'
import { UserStatus } from '../../domain/value-objects/user-status'

export class UserRegister {
  constructor (
    private readonly repository: UserRepository,
    private readonly eventBus: EventBus
  ) {}

  async run (
    id: string,
    name: string,
    email: string,
    profilePicture: string
  ): Promise<void> {
    const user = User.create({
      id,
      name,
      email,
      profilePicture,
      status: UserStatus.Active
    })

    await this.repository.save(user)
    await this.eventBus.publish(user.pullDomainEvents())
  }
}
