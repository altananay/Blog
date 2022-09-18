import { Write } from "../interfaces/Write";
import { Read } from "../interfaces/Read";

import { MongoClient, Db, Collection, InsertOneResult } from 'mongodb';

export abstract class BaseRepository<T> implements Write<T>, Read<T>
{

    public readonly _collection: Collection;

    constructor(database: Db, collectionName: string)
    {
        this._collection = database.collection(collectionName);
    }

    find(model: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }

    findOne(model: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

    async create(model: T): Promise<void> {
        const result: InsertOneResult = await this._collection.insertOne(model as Document);
    }

    update(id: string, model: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}