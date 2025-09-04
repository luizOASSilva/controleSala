import { Router } from "express";

import LessonsViewController from "../controllers/LessonsView.controller";

const router = Router();

router.get('/:dayOfWeek/:shift', LessonsViewController.getLessonByWeekdayAndShift);

export default router;
