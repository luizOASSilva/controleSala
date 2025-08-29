"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aula_view_model_1 = __importDefault(require("../models/aula-view.model"));
class HomeController {
    async getAllCursos(req, res) {
        try {
            const cursos = await aula_view_model_1.default.findAll();
            res.json(cursos);
        }
        catch (error) {
            res.status(404).json({ error: 'Cursos não encontrados.' });
        }
    }
}
exports.default = new HomeController;
