import { NotFoundError } from '../../../../shared/domain/errors/not-found-error'

export class ProductNotExistError extends NotFoundError {
	constructor(id: string) {
		super(`Product with id <${id}> does not exist`)
	}
}
