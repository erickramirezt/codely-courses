import { DomainEvent } from '../../../../shared/domain/events/domain-event'

export interface UserEmailUpdatedDomainEventPrimitives {
  id: string
  email: string
}

export class UserEmailUpdatedDomainEvent extends DomainEvent {
  constructor (
    private readonly id: string,
    private readonly email: string
  ) {
    super()
  }
}
