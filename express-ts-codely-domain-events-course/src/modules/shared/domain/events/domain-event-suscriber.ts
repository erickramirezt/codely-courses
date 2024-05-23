import { type DomainEvent } from './domain-event'
import { type DomainEventName } from './domain-event-name'

export interface DomainEventSuscriber<T extends DomainEvent> {
  on: (domainEvent: T) => Promise<void>

  subscribedTo: () => Array<DomainEventName<T>>
}
