import { MongoClient } from 'mongodb'
import { MongoClientFactory } from '../../../../src/modules/shared/infrastructure/persistence/mongo/mongo-client-factory'

describe('MongoClientFactory', () => {
  describe('MongoClientFactory', () => {
    const factory = MongoClientFactory
    let client: MongoClient

    beforeEach(async () => {
      client = await factory.createClient('test', {
        url: 'mongodb://localhost:27017'
      })
    })

    afterEach(async () => {
      await client.close()
    })

    it('creates a new client with the connection already established', async () => {
      expect(client).toBeInstanceOf(MongoClient)
    })

    it('creates a new client if it does not exist client', async () => {
      const newClient = await factory.createClient('test', {
        url: 'mongodb://localhost:27017'
      })

      expect(newClient).not.toBe(client)
    })
  })
})
