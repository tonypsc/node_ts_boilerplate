import { MongoClient, Collection } from 'mongodb';
import { AggregateRoot } from '../../domain/AggregateRoot';

export abstract class MongoRepository<T extends AggregateRoot> {
	constructor(private _client: MongoClient) {}

	protected abstract moduleName(): string;

	protected async collection(): Promise<Collection> {
		return (await this._client).db().collection(this.moduleName());
	}

	protected async persist(id: string, aggregate: T): Promise<void> {
		const collection = await this.collection();
		const document = { ...aggregate.toPrimitives(), _id: id };
		await collection.updateOne(
			{ _id: id },
			{ $set: document },
			{ upsert: true }
		);
	}
}
