import { AggregateRoot } from '../../../shared/domain/model/aggregate-root'
import {
	JobExperience,
	JobExperiencePrimitives
} from '../value-objects/job-experiences/job-experience'
import { JobExperienceCollection } from '../value-objects/job-experiences/job-experience-collection'
import { UserBirthdate } from '../value-objects/user-birthdate'
import { UserEmail } from '../value-objects/user-email'
import { UserId } from '../value-objects/user-id'

export interface UserPrimitives {
	id: string
	email: string
	birthdate: Date
	jobExperiences: Array<{
		company: string
		title: string
		startDate: Date
		endDate: Date | null
	}>
}

export class User extends AggregateRoot<UserPrimitives> {
	constructor(
		private readonly id: UserId,
		private email: UserEmail,
		private readonly birthdate: UserBirthdate,
		private readonly jobExperiences: JobExperienceCollection
	) {
		super()
	}

	static fromPrimitives(primitives: UserPrimitives): User {
		return new User(
			new UserId(primitives.id),
			new UserEmail(primitives.email),
			new UserBirthdate(primitives.birthdate),
			new JobExperienceCollection(
				primitives.jobExperiences.map((_) => JobExperience.fromPrimitives(_))
			)
		)
	}

	toPrimitives(): UserPrimitives {
		return {
			id: this.id.value,
			email: this.email.value,
			birthdate: this.birthdate.value,
			jobExperiences: this.jobExperiences.toPrimitives()
		}
	}

	get emailValue(): string {
		return this.email.value
	}

	get idValue(): string {
		return this.id.value
	}

	get birthdateValue(): Date {
		return this.birthdate.value
	}

	get jobExperiencesValue(): JobExperiencePrimitives[] {
		return this.jobExperiences.jobExperiencesValue
	}

	updateEmail(email: string): void {
		this.email = new UserEmail(email)
	}
}
