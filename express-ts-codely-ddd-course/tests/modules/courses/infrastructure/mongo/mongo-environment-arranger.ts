import { type MongoClient } from 'mongodb'
import { EnvironmentArranger } from '../../../shared/infrastructure/arranger/environment-arranger'

export class MongoEnvironmentArranger extends EnvironmentArranger {
  constructor (private readonly _client: Promise<MongoClient>) {
    super()
  }

  async arrange (): Promise<void> {
    await this.cleanDatabase()
  }

  protected async cleanDatabase (): Promise<void> {
    const collections = await this.collections()
    const client = await this.client()

    for (const collection of collections) {
      await client.db().collection(collection).deleteMany({})
    }
  }

  protected async collections (): Promise<string[]> {
    const client = await this.client()
    const collections = await client
      .db()
      .listCollections(undefined, { nameOnly: true })
      .toArray()
    return collections.map((collection) => collection.name)
  }

  protected async client (): Promise<MongoClient> {
    return await this._client
  }

  async close (): Promise<void> {
    await (await this.client()).close()
  }
}
