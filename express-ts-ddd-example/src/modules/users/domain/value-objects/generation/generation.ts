export enum GenerationName {
	Silent,
	BabyBoomer,
	GenX,
	Millenial,
	GenZ,
	GenAlpha,
	Unknown
}

export class Generation {
	private static readonly generationConfig = [
		{ name: GenerationName.Silent, minYear: 1928, maxYear: 1945 },
		{ name: GenerationName.BabyBoomer, minYear: 1946, maxYear: 1964 },
		{ name: GenerationName.GenX, minYear: 1965, maxYear: 1980 },
		{ name: GenerationName.Millenial, minYear: 1981, maxYear: 1996 },
		{ name: GenerationName.GenZ, minYear: 1997, maxYear: 2012 },
		{ name: GenerationName.GenAlpha, minYear: 2013 }
	]

	static from = (birthdate: Date): GenerationName => {
		const birthYear = birthdate.getFullYear()

		for (const generation of this.generationConfig) {
			if (
				birthYear >= generation.minYear &&
				(generation.maxYear === undefined || birthYear <= generation.maxYear)
			) {
				return generation.name
			}
		}

		return GenerationName.Unknown
	}
}
