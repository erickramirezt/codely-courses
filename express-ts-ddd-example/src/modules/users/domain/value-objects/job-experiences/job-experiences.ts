import { JobExperience } from './job-experience'

// TODO: EXTEND THIS CLASS FROM COLLECTION<JOB EXPERIENCE, JOB EXPERIENCE PRIMITIVES>
export class JobExperiences {
	public readonly value: JobExperience[]
	constructor(
		experiences: Array<{
			company: string
			title: string
			startDate: Date
			endDate: Date | null
		}>
	) {
		this.value = experiences.map(
			(_) => new JobExperience(_.company, _.title, _.startDate, _.endDate)
		)
		this.validateJobExperiences(this.value)
	}

	// TODO: ADD STATIC METHOD TO CREATE JOB EXPERIENCES FROM PRIMITIVES

	// TODO: ADD METHOD TO RETURN PRIMITIVES

	// TODO: ADD IS VALID STATIC METHOD

	private validateJobExperiences(jobExperiences: JobExperience[]) {
		const sortedExperiences = jobExperiences.sort(
			(a, b) => a.startDate.getTime() - b.startDate.getTime()
		)
		for (let i = 0; i < sortedExperiences.length - 1; i++) {
			const currentExperience = sortedExperiences[i]
			const nextExperience = sortedExperiences[i + 1]

			if (currentExperience.endDate === null) {
				continue
			}

			// TODO: USE DATE RANGE IS VALID STATIC METHOD
			if (currentExperience.endDate.getTime() > nextExperience.startDate.getTime()) {
				// TODO: CREATE INVALID JOB EXPERIENCES ERROR
				throw new Error('Las experiencias laborales no pueden superponerse')
			}
		}
	}
}
