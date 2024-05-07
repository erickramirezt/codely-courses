import { Collection } from '../../../../shared/domain/model/collection'
import { InvalidJobExperienceCollectionError } from '../../errors/job-experiences/invalid-job-experience-collection-error'
import { JobExperience, JobExperiencePrimitives } from './job-experience'

export class JobExperienceCollection extends Collection<JobExperience, JobExperiencePrimitives> {
	constructor(private readonly jobExperiences: JobExperience[]) {
		super(jobExperiences)
		this.validateJobExperiences(jobExperiences)
	}

	fromPrimitives(primitives: JobExperiencePrimitives[]): JobExperienceCollection {
		const jobExperiences = primitives.map((_) => JobExperience.fromPrimitives(_))

		return new JobExperienceCollection(jobExperiences)
	}

	toPrimitives(): JobExperiencePrimitives[] {
		return this.jobExperiences.map((_) => _.toPrimitives())
	}

	get jobExperiencesValue(): JobExperiencePrimitives[] {
		return this.jobExperiences.map((_) => _.toPrimitives())
	}

	private validateJobExperiences(jobExperiences: JobExperience[]) {
		const sortedExperiences = jobExperiences.sort(
			(a, b) => a.startDateValue.getTime() - b.startDateValue.getTime()
		)
		for (let i = 0; i < sortedExperiences.length - 1; i++) {
			const currentExperience = sortedExperiences[i]
			const nextExperience = sortedExperiences[i + 1]

			if (currentExperience.endDateValue === null) {
				continue
			}

			if (currentExperience.endDateValue.getTime() > nextExperience.startDateValue.getTime()) {
				throw new InvalidJobExperienceCollectionError()
			}
		}
	}
}
