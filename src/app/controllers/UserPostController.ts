import { UserCreator } from '../../contexts/user/application/UserCreator';
import { Request, Response } from 'express';
import { MongoUserRepository } from '../../contexts/user/infrastructure/persistance/MongoUserRepository';
import { MongoClient, Collection } from 'mongodb';
import { User } from '../../contexts/user/domain/User';
import { UserId } from '../../contexts/user/domain/UserId';

export class UserPostController {
	async run(req: Request, res: Response) {
		const user = new User(new UserId('1'), req.body('name'));
		const mongoClient = new MongoClient('', {});
		const mongoUserRepository = new MongoUserRepository(mongoClient);
		const userCreator = new UserCreator(mongoUserRepository, user);
		try {
			await userCreator.invoke();
			res.json({ status: 'ok', message: 'Usuario creado ok' });
		} catch (error) {
			res.json(error);
		}
	}
}
