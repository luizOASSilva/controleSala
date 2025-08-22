"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const homeController_js_1 = __importDefault(require("../controllers/homeController.js"));
const professorController_js_1 = __importDefault(require("../controllers/professorController.js"));
const editSubjectController_js_1 = __importDefault(require("../controllers/editSubjectController.js"));
const router = express_1.default.Router();
router.get('/', homeController_js_1.default);
router.get('/professor', professorController_js_1.default);
router.get('/editSubject', editSubjectController_js_1.default);
exports.default = router;
