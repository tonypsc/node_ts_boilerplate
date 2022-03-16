import { User } from './User';

export interface UserRepository {
	save(user: User): Promise<void>;
	// getAll(): Promise<User[]>;
	// getOne(): Promise<User>;
	// delete(userId: number): Promise<void>;
}
