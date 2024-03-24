import { type Repository, type Connection, type EntitySchema } from 'typeorm'
import { type AggregateRoot } from '../../../domain/aggregate-root'

export abstract class TypeOrmRepository<T extends AggregateRoot> {
  constructor (private readonly _client: Promise<Connection>) {}

  protected abstract entitySchema (): EntitySchema<T>

  protected async client (): Promise<Connection> {
    return await this._client
  }

  protected async repository (): Promise<Repository<T>> {
    return (await this._client).getRepository(this.entitySchema())
  }

  protected async persist (aggregateRoot: T): Promise<void> {
    const repository = await this.repository()
    await repository.save(aggregateRoot)
  }
}
