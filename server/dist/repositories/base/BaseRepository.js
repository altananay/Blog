"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(database, collectionName) {
        this._collection = database.collection(collectionName);
    }
    find(model) {
        throw new Error("Method not implemented.");
    }
    findOne(model) {
        throw new Error("Method not implemented.");
    }
    create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._collection.insertOne(model);
        });
    }
    update(id, model) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.BaseRepository = BaseRepository;
