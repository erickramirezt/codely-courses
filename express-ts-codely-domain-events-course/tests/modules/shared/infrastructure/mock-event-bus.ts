import { type DomainEvent } from '../../../../src/modules/shared/domain/events/domain-event'
import { type EventBus } from '../../../../src/modules/shared/domain/events/event-bus'

export class MockEventBus implements EventBus {
  private readonly mockPublish = jest.fn()

  async publish (events: DomainEvent[]): Promise<void> {
    expect(this.mockPublish).toHaveBeenCalledWith(events)
  }

  shouldPublish (events: DomainEvent[]): void {
    this.mockPublish(events)
  }
}
