"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfessorScheduleView_controller_1 = __importDefault(require("../controllers/ProfessorScheduleView.controller"));
const router = (0, express_1.Router)();
router.use('/', ProfessorScheduleView_controller_1.default.getProfessorByWeekdayAndShift);
exports.default = router;
