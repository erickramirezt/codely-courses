import { describe, beforeAll, afterAll, afterEach } from 'vitest'
import { server } from '../../../shared/infrastructure/persistence/mocks/server'

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})

afterAll(() => {
  server.close()
})

afterEach(() => {
  server.resetHandlers()
})

describe('api course repository', () => {})