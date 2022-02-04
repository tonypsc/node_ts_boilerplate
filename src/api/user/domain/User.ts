import { UserName } from './UserName';
import { UserId } from './UserId';

export class User {
	private _userId: UserId;
	private _userName: UserName;

	constructor(userId: UserId, userName: UserName) {
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
