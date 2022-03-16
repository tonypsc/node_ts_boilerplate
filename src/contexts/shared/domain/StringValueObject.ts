import { ValueObject } from './ValueObject';

export abstract class StringValueObject extends ValueObject<String> {
	constructor(value: string) {
		super(value);
	}
}
