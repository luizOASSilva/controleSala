"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const professor_model_1 = __importDefault(require("../models/professor.model"));
class ProfessorController {
    async getAllProfessores(req, res) {
        try {
            const professores = await professor_model_1.default.findAll();
            res.status(200).json(professores);
        }
        catch (error) {
            res.status(500).json({ error: 'curso não encontrado' });
        }
    }
}
exports.default = new ProfessorController;
