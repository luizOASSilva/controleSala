import express from "express";

import lessonsViewRoute from './routes/lessonsView.route';
import professorScheduleViewRoute from './routes/professorScheduleView.route';

const app = express();

app.use(express.json());

app.use('/api/lessons', lessonsViewRoute);
app.use('/api/professors', professorScheduleViewRoute);

export default app;
