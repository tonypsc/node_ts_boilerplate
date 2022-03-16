import { UserName } from './UserName';
import { UserId } from './UserId';
import { AggregateRoot } from '../../shared/domain/AggregateRoot';

export class User extends AggregateRoot {
	private _userId: UserId;
	private _userName: UserName;

	constructor(userId: UserId, userName: UserName) {
		super();
		this._userId = userId;
		this._userName = userName;
	}

	static fromPrimitives(plainData: { userId: string; userName: string }) {
		return new User(
			new UserId(plainData.userId),
			new UserName(plainData.userName)
		);
	}

	toPrimitives() {
		return {
			id: this._userId.toString(),
			username: this._userName.toString(),
		};
	}
}
