import { faker } from '@faker-js/faker'

export const MotherCreator = {
	string: {
		uuid(): string {
			return faker.string.uuid()
		},
		word({ max, min = 1 }: { min?: number; max: number }): string {
			return faker.word.sample({ length: { max, min } })
		}
	}
}
