export class ProductViews {
	constructor(readonly value: number) {}

	static initialize(): ProductViews {
		return new ProductViews(0)
	}
}
