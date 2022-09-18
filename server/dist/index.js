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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const MessageRepository_1 = require("./repositories/MessageRepository");
const Message_1 = require("./models/Message");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const connectionUrl = process.env.CONNECTION_URL;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield mongodb_1.MongoClient.connect(connectionUrl);
    const database = connection.db("blog");
    const message = new Message_1.Message("altan anay", "altananay@outlook.com", "test");
    const repository = new MessageRepository_1.MessageRepository(database, "messages");
    const result = yield repository.create(message);
    console.log("added to mongodb...");
}));
