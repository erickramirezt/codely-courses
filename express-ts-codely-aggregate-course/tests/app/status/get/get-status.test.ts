import { StatusCodes } from 'http-status-codes'
import { api } from '../../shared/api-test'
import { BASE_API_ROUTE } from '../../../../src/app/constants/api-routes'

test('get api status', async () => {
  await api.get(BASE_API_ROUTE).expect(StatusCodes.OK)
})
