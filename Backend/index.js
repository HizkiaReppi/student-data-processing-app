import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import studentRouter from './routes/student.js';

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/student', studentRouter);

app.listen(8080, () => console.log('Server is Running!'));
