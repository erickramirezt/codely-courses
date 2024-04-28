import { DomainEvent } from '../../../../shared/domain/events/domain-event'

export interface UserArchivedDomainEventPrimitives {
  id: string
}

export class UserArchivedDomainEvent extends DomainEvent {
  constructor (private readonly id: string) {
    super()
  }
}
