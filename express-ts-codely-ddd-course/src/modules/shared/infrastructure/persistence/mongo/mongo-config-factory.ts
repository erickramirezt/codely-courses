import config from '../../config'
import { type MongoConfig } from './mongo-config'

const mongoConfig = {
  url: config.get('mongo.url')
}

export const MongoConfigFactory = {
  createConfig (): MongoConfig {
    return mongoConfig
  }
}
