import { StringValueObject } from '../../shared/domain/StringValueObject';
import { InvalidArgumentError } from '../../shared/domain/InvalidArgumentError';

export class UserName extends StringValueObject {
	constructor(name: string) {
		super(name);
		this.checkLengthUnder50Chars(name);
		this.checkEmptyName(name);
	}

	protected checkLengthUnder50Chars(name: string): void {
		if (name.length > 50)
			throw new InvalidArgumentError(
				`The user name ${name} has more than 50 characters.`
			);
	}

	protected checkEmptyName(name: string): void {
		if (!name) throw new InvalidArgumentError('The user name is required');
	}
}
