import { Router } from "express";

import professorController from "../controllers/professor.controller";

const router = Router();

router.get('/profesor', professorController);

export default router;
