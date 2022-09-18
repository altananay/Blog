import express, { Express, Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from "cors"

import {MessageRepository} from "./repositories/MessageRepository"
import {Message} from "./models/Message"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const connectionUrl:string = process.env.CONNECTION_URL as string;


app.use(cors());
app.use(express.json());



app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, async () => {
  const connection = await MongoClient.connect(connectionUrl);
  const database = connection.db("blog")

  const message = new Message("altan anay", "altananay@outlook.com", "test");
  const repository = new MessageRepository(database, "messages")

  const result = await repository.create(message);
  console.log("added to mongodb...")
});