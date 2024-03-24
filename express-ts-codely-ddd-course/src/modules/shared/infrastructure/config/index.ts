import convict from 'convict'
import path from 'path'

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default:
        process.env.MONGO_URL ??
        `mongodb+srv://user:${process.env.MONGO_PASSWORD}@cluster0.ky7rhys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    }
  }
})

config.loadFile([
  path.resolve(__dirname, 'default.json'),
  path.resolve(__dirname, config.get('env') + '.json')
])

export default config
