export class Uuid {
  constructor (readonly value: string) {
    this.ensureIsValidUuid(value)
  }

  static random (): Uuid {
    return new Uuid(crypto.randomUUID())
  }

  private ensureIsValidUuid (value: string): void {
    if (!this.validateUuid(value)) {
      throw new Error(`<${value}> is not a valid uuid`)
    }
  }

  private validateUuid (value: string): boolean {
    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

    return regexExp.test(value)
  }

  toString (): string {
    return this.value
  }
}
