export abstract class Collection<M, P> {
	constructor(readonly value: M[]) {}

	abstract toPrimitives(): P[]
}
