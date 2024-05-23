import { DomainEvent } from '../../../../shared/domain/events/domain-event'

export class UserRegisteredDomainEvent extends DomainEvent {
  static eventName = 'user.registered'

  constructor (
    private readonly id: string,
    private readonly name: string,
    private readonly email: string,
    private readonly profilePicture: string,
    private readonly status: string
  ) {
    super(UserRegisteredDomainEvent.eventName)
  }
}
