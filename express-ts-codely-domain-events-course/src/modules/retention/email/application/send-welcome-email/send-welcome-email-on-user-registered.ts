import { type DomainEventSuscriber } from '../../../../shared/domain/events/domain-event-suscriber'
import { type UserRegisteredDomainEvent } from '../../../../shop/users/domain/events/user-registered-domain-event'

export class SendWelcomeEmailOnUserRegistered implements DomainEventSuscriber<UserRegisteredDomainEvent> {
  constructor (private readonly sender: WelcomeEmailSender) {}
}
