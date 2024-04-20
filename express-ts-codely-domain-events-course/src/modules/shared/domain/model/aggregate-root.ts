import { type DomainEvent } from '../events/domain-event'

export abstract class AggregateRoot<T> {
  private domainEvents: DomainEvent[] = []

  pullDomainEvents (): DomainEvent[] {
    const domainEvents = this.domainEvents.slice()
    this.domainEvents = []
    return domainEvents
  }

  record (event: DomainEvent): void {
    this.domainEvents.push(event)
  }

  abstract toPrimitives (): T
}
