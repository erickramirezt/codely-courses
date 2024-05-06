import { InvalidJobExperiencesError } from '../../errors/job-experiences/invalid-job-experiences-error'
import { JobExperience, JobExperiencePrimitives } from './job-experience'

// TODO: EXTEND THIS CLASS FROM COLLECTION<JOB EXPERIENCE, JOB EXPERIENCE PRIMITIVES>
export class JobExperiences {
	public readonly value: JobExperience[]
	constructor(experiences: Array<JobExperiencePrimitives>) {
		this.value = experiences.map((_) => JobExperience.fromPrimitives(_))
		this.validateJobExperiences(this.value)
	}

	fromPrimitives(primitives: JobExperiencePrimitives[]): JobExperiences {
		return new JobExperiences(primitives)
	}

	toPrimitives(): JobExperiencePrimitives[] {
		return this.value.map((_) => _.toPrimitives())
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
				throw new InvalidJobExperiencesError()
			}
		}
	}
}
