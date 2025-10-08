import { Router } from "express";

import ProfessorScheduleViewController from "../controllers/ProfessorScheduleView.controller";

const router = Router();

router.use('/', ProfessorScheduleViewController.getProfessorByWeekdayAndShift);


export default router;