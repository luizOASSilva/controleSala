import express from "express";

import lessonsViewRoute from './routes/lessonsView.route';

const app = express();

app.use(express.json());

app.use('/api/lessons', lessonsViewRoute);

export default app;
