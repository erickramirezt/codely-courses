import { AggregateRoot } from '../../../shared/domain/model/aggregate-root'
import { type EmailAddress } from '../../../shared/domain/value-objects/email-address'
import { type EmailBody } from './value-objects/email-body'
import { type EmailId } from './value-objects/email-id'

interface EmailPrimitives {
  id: string
  from: string
  to: string
  body: string
}

export abstract class Email extends AggregateRoot<EmailPrimitives> {
  protected constructor (
    protected readonly id: EmailId,
    protected readonly from: EmailAddress,
    protected readonly to: EmailAddress,
    protected readonly body: EmailBody
  ) {
    super()
  }
}
