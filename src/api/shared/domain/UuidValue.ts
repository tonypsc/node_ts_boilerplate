import { v4 } from 'uuid';

export class UuidValue {
	protected _value: string;
	constructor(id: string) {
		this._value = id;
		// check id is a valid uuid
	}

	public static random(): UuidValue {
		return new UuidValue(v4());
	}

	public toString(): string {
		return this._value;
	}
}
