import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { envConfig } from './configs/env.config.ts';
import mongoDBConnection from './configs/mongoDB.connection.ts';
import router from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router());
app.use(express.json())
app.use(cors());
app.use('/', router());

app.listen(envConfig.PORT || 8000, async () => { 
  await mongoDBConnection();
  console.log("server is running on port: ", envConfig.PORT || 8000)
})