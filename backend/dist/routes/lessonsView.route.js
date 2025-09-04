"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LessonsView_controller_1 = __importDefault(require("../controllers/LessonsView.controller"));
const router = (0, express_1.Router)();
router.get('/:dayOfWeek/:shift', LessonsView_controller_1.default.getLessonByWeekdayAndShift);
exports.default = router;
