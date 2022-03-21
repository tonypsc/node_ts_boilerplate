import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';

export class UserGetter {
	userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async invoke(): Promise<User[]> {
		return this.userRepository.find();
	}
}
