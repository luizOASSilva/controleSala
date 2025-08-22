import express from "express"

import homeController from "../controllers/homeController.js";
import professorController from "../controllers/professorController.js";
import editSubjectController from "../controllers/editSubjectController.js";

const router = express.Router();

router.get('/', homeController);

router.get('/professor', professorController);

router.get('/editSubject', editSubjectController);



export default router;
