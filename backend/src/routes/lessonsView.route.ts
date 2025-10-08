import { Router } from "express";
import LessonsViewController from "../controllers/LessonsView.controller";

const router = Router();

router.get('/', LessonsViewController.getLessonByWeekdayAndShift);
router.get('/:id', LessonsViewController.getLessonById); 

export default router;
