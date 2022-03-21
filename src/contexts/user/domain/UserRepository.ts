import { User } from './User';

export interface UserRepository {
	save(user: User): Promise<void>;
	find(): Promise<User[]>;
	// getOne(): Promise<User>;
	// delete(userId: number): Promise<void>;
}
