import { StatusCodes } from 'http-status-codes'
import { BASE_API_ROUTE } from '../../../../src/app/constants'
import { api } from '../../shared'

test('get api status', async () => {
  await api.get(BASE_API_ROUTE).expect(StatusCodes.OK)
})
