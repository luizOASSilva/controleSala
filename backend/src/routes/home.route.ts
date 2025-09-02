import { Router } from "express";

import HomeController from "../controllers/home.controller";

const router = Router();

router.get('/', HomeController.getAllAulas);

export default router;
