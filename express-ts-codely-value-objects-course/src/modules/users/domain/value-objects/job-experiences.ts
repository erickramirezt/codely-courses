import { InvalidArgumentError } from '../../../shared/domain/errors/invalid-argument-error'
import { JobExperience } from './job-experience'

export class JobExperiences {
  public readonly value: JobExperience[]

  constructor (
    experiences: Array<{
      company: string
      title: string
      startDate: Date
      endDate: Date | null
    }>
  ) {
    const jobExperiences = experiences.map(
      (_) => new JobExperience(_.company, _.title, _.startDate, _.endDate)
    )
    this.validateNoOverlappingExperiences(jobExperiences)
    this.value = jobExperiences
  }

  private validateNoOverlappingExperiences (
    jobExperiences: JobExperience[]
  ): void {
    const sortedExperiences = jobExperiences.sort(
      (a, b) => a.startDate.getTime() - b.startDate.getTime()
    )

    for (let i = 0; i < sortedExperiences.length - 1; i++) {
      const currentExperience = sortedExperiences[i]
      const nextExperience = sortedExperiences[i + 1]

      if (currentExperience.endDate === null) {
        continue
      }

      if (
        currentExperience.endDate.getTime() > nextExperience.startDate.getTime()
      ) {
        throw new InvalidArgumentError(
          `The job experience at ${
            currentExperience.company.value
          } from ${currentExperience.startDate.toString()} to ${currentExperience.endDate.toString()} overlaps with the job experience at ${
            nextExperience.company.value
          } from ${nextExperience.startDate.toString()} to ${nextExperience.endDate?.toString()}.`
        )
      }
    }
  }
}
