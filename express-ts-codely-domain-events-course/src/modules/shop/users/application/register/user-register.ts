import { type EventBus } from '../../../../shared/domain/events/event-bus'
import { UserRegisteredDomainEvent } from '../../domain/events/user-registered-domain-event'
import { User } from '../../domain/model/user'
import { type UserRepository } from '../../domain/repository/user-repository'

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
    const user = User.create({ id, name, email, profilePicture })

    await this.repository.save(user)
    await this.eventBus.publish([
      new UserRegisteredDomainEvent(id, name, email, profilePicture)
    ])
  }
}
