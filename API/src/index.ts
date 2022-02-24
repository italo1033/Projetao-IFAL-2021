import dotenv from 'dotenv';
dotenv.config();

// Variaveis de ambiente
const localConnUri: string | undefined  = process.env.MONGO_LOCAL_URL;
const serverConnUri: string | undefined = process.env.MONGO_URL;
const environment: string | undefined = process.env.NODE_ENV;
const databaseUri: any = environment === 'development' ? localConnUri : serverConnUri;

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();

//const PORT = 8000;
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.Promise = global.Promise;
const mongooseOptions:any = { useNewUrlParser: true };
try
{
    mongoose.connect(databaseUri, mongooseOptions)
    console.log(`Connected to database ${databaseUri}`);
}
catch (err)
{
    console.log('Error on connecting to database');
    console.log('And error is this: ' + err);
}

// Logger das reqs
app.use(logger('dev'))

app.use('/api/v1', routes(router));

//app.get("/", (req,res) => res.json({"msg":"Hello world !"}))

app.listen(process.env.PORT || 8000, () =>{
    console.log('Server is running');
});