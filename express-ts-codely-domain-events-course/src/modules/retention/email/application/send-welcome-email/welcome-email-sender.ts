import { type EventBus } from '../../../../shared/domain/events/event-bus'
import { type UuidGenerator } from '../../../../shared/domain/value-objects/uuid-generator'

export class WelcomeEmailSender {
  constructor (
    private readonly uuidGenerator: UuidGenerator,
    private readonly sender: WelcomeEmailSender,
    private readonly eventBus: EventBus
  ) {}

  async run (userId: string, name: string, emailAddress: string): Promise<void> {
    const email = WelcomeEmail.send(
      
    )
  }
}
