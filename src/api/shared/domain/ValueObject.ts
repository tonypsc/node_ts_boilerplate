export abstract class ValueObject<T extends object> {
	private _value: T;

	constructor(value: T) {
		this._value = value;
	}

	public equals(compareValue: object): boolean {
		return this._value === compareValue;
	}

	public toJson(): string {
		return this._value.toString();
	}

	public toString(): string {
		if (this._value) {
			return this._value.toString();
		} else {
			return '';
		}
	}

	public valueOf(): T {
		return this._value;
	}
}
