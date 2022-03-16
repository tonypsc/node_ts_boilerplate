import { UserRepository } from '../../domain/UserRepository';
import { User } from '../../domain/User';
import { MongoRepository } from '../../../shared/infrastructure/persistance/MongoRepository';

export class MongoUserRepository
	extends MongoRepository<User>
	implements UserRepository
{
	save(user: User): Promise<void> {
		return this.persist(user.toPrimitives().id, user);
	}

	async find(): Promise<any> {
		const collection = await this.collection();
		await collection.find({ _id: 'algo' }).toArray();
	}

	moduleName(): string {
		return 'user';
	}
}
