import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';

export class UserCreator {
	protected repository: UserRepository;
	protected user: User;

	constructor(userRepository: UserRepository, user: User) {
		this.repository = userRepository;
		this.user = user;
	}

	invoke() {}
}
