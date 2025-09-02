"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const professor_controller_1 = __importDefault(require("../controllers/professor.controller"));
const router = (0, express_1.Router)();
router.get('/', professor_controller_1.default.getAllProfessores);
exports.default = router;
