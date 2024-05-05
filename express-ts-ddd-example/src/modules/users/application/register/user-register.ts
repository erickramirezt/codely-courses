import { User } from '../../domain/model/user'
import { UserRepository } from '../../domain/repository/user-repository'

export class UserRegister {
	constructor(private readonly repository: UserRepository) {}

	// TODO: CREATE INTERFACE FOR USER REGISTER PROPS
	async run(
		id: string,
		email: string,
		birthdate: Date,
		jobExperiences: {
			company: string
			title: string
			startDate: Date
			endDate: Date | null
		}[]
	): Promise<void> {
		const user = new User(id, email, birthdate, jobExperiences)

		await this.repository.save(user)
	}
}
