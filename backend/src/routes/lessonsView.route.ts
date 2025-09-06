import { Router } from "express";

import LessonsViewController from "../controllers/LessonsView.controller";

const router = Router();

router.get('/', LessonsViewController.getLessonByWeekdayAndShift);

export default router;
