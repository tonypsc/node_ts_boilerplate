import { UserGetter } from '../../contexts/user/application/UserGetter';
import { Request, Response } from 'express';
import { MongoUserRepository } from '../../contexts/user/infrastructure/persistance/MongoUserRepository';
import { MongoClient } from 'mongodb';

export class UserGetAllController {
	static async run(req: Request, res: Response) {
		const mongoClient = new MongoClient('', {});
		const mongoUserRepository = new MongoUserRepository(mongoClient);
		const userGetter: UserGetter = new UserGetter(mongoUserRepository);
		try {
			const users = await userGetter.invoke();
			res.json({ status: 'success', data: users });
		} catch (error: any) {
			res.json({ status: error, message: error.message });
		}
	}
}
