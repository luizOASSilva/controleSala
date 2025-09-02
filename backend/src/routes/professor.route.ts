import { Router } from "express";

import ProfessorController from '../controllers/professor.controller';

const router = Router();

router.get('/', ProfessorController.getAllProfessores);

export default router;
