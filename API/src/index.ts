import dotenv from 'dotenv';
dotenv.config();

// Variaveis de ambiente
const localConnUri: String | undefined  = process.env.MONGO_LOCAL_URL;
const serverConnUri: String | undefined = process.env.MONGO_URL;
const environment: String | undefined = process.env.NODE_ENV;
const databaseUri: String | undefined = environment === 'development' ? localConnUri : serverConnUri;

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import routes from './routes';

const app = express();
const router = express.Router();

//const PORT = 8000;
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
// Logger das reqs
app.use(logger('dev'))

app.use('/api/v1', routes(router));

//app.get("/", (req,res) => res.json({"msg":"Hello world !"}))

app.listen(process.env.PORT || 8000, () =>{
    console.log('Server is running');
});