// export interface UserPrimitives {
// 	id: string
// 	email: string
// 	birthdate: Date
// 	jobExperiences: Array<{
// 		company: string
// 		title: string
// 		startDate: Date
// 		endDate: Date | null
// 	}>
// }

import { JobExperiences } from '../value-objects/job-experiences/job-experiences'
import { UserBirthdate } from '../value-objects/user-birthdate'
import { UserEmail } from '../value-objects/user-email'
import { UserId } from '../value-objects/user-id'

// TODO: EXTEND THIS CLASS FROM AGGREGATE ROOT<USER PRIMITIVES>
export class User {
	// TODO: UPDATE PROPERTIES TO BE PUBLIC AND REFACTOR CONSTRUCTOR TO USE VALUE OBJECTS

	private email: UserEmail
	private readonly id: UserId
	private readonly birthdate: UserBirthdate
	private readonly jobExperiences: JobExperiences

	constructor(
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

	// TODO: ADD STATIC METHOD TO CREATE USER FROM PRIMITIVES

	// TODO: ADD METHOD TO RETURN PRIMITIVES

	get emailValue(): string {
		return this.email.value
	}

	get idValue(): string {
		return this.id.value
	}

	get birthdateValue(): Date {
		return this.birthdate.value
	}

	updateEmail(email: string): void {
		this.email = new UserEmail(email)
	}
}
