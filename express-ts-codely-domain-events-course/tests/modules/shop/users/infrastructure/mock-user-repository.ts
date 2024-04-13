import { type User } from '../../../../../src/modules/shop/users/domain/model/user'
import { type UserRepository } from '../../../../../src/modules/shop/users/domain/repository/user-repository'
import { type UserId } from '../../../../../src/modules/shop/users/domain/value-objects/user-id'

export class MockUserRepository implements UserRepository {
  private readonly mockSave = jest.fn()
  private readonly mockSearch = jest.fn()

  async save (user: User): Promise<void> {
    expect(this.mockSave).toHaveBeenCalledWith(user)
  }

  async search (id: UserId): Promise<User | null> {
    expect(this.mockSearch).toHaveBeenCalledWith(id)

    return await (this.mockSearch() as Promise<User | null>)
  }

  shouldSave (user: User): void {
    this.mockSave(user)
  }

  shouldSearch (user: User): void {
    this.mockSearch(user.id)
    this.mockSearch.mockReturnValue(user)
  }

  shouldNotSearch (id: UserId): void {
    this.mockSearch(id)
    this.mockSearch.mockReturnValue(null)
  }
}
