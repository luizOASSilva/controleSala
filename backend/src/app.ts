import express from "express";

import homeRoute from './routes/home.route';
import professorRoute from './routes/professor.route';

const app = express();

app.use(express.json());

app.use('/', homeRoute);
app.use('/professores', professorRoute);

export default app;