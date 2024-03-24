import { JobExperiences } from '../value-objects/job-experiences'
import { UserBirthdate } from '../value-objects/user-birthdate'
import { UserEmail } from '../value-objects/user-email'
import { UserId } from '../value-objects/user-id'

export class User {
  private email: UserEmail
  private readonly id: UserId
  private readonly birthdate: UserBirthdate
  private readonly jobExperiences: JobExperiences

  constructor (
    id: string,
    email: string,
    birthdate: Date,
    jobExperiences: Array<{
      company: string
      title: string
      startDate: Date
      endDate: Date | null
    }>
  ) {
    this.id = new UserId(id)
    this.email = new UserEmail(email)
    this.birthdate = new UserBirthdate(birthdate)
    this.jobExperiences = new JobExperiences(jobExperiences)
  }

  get emailValue (): string {
    return this.email.value
  }

  updateEmail (email: string): void {
    this.email = new UserEmail(email)
  }
}
