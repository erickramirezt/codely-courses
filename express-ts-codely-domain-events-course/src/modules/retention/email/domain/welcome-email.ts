import { EmailAddress } from '../../../shared/domain/value-objects/email-address'
import { UserId } from '../../../shop/users/domain/value-objects/user-id'
import { Email } from './email'
import { type EmailBody } from './value-objects/email-body'
import { EmailId } from './value-objects/email-id'

export interface WelcomeEmailPrimitives {
  id: string
  userId: string
  userName: string
  from: string
  to: string
  body: string
}

export class WelcomeEmail extends Email {
  private static readonly from = 'soporte@codely.com'

  private constructor(
    id: EmailId,
    from: EmailAddress,
    to: EmailAddress,
    body: EmailBody,
    private readonly userId: UserId,
    private readonly userName: string
  ) {
    super(id, from, to, body)
  }

  static send(
    id: string,
    userId: string,
    name: string,
    emailAddress: string
  ): WelcomeEmail {
    const from = new EmailAddress(WelcomeEmail.from)
    const body = WelcomeEmail.generateBody(userId, name)

    const email = new WelcomeEmail(
      new EmailId(id),
      from,
      new EmailAddress(emailAddress),
      body,
      new UserId(userId),
      name
    )

    email.record(
      new WelcomeEmailSentDomainEvent(id, userId, name, emailAddress)
    )

    return email
  }

  private static generateBody(userId: string, name: string) {
    throw new Error('Method not implemented.')
  }
}
