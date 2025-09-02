"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aula_view_model_1 = __importDefault(require("../models/aula-view.model"));
const get_dia_semana_1 = require("../utils/get-dia-semana");
class HomeController {
    async getAllAulas(req, res) {
        try {
            const diaDaSemana = (0, get_dia_semana_1.getDiaDaSemana)();
            const cursos = await aula_view_model_1.default.findAll({
                where: {
                    diaSemana: diaDaSemana,
                }
            });
            res.status(200).json(cursos);
        }
        catch (error) {
            res.status(500).json({ error: 'Aulas não encontradas.' });
        }
    }
}
exports.default = new HomeController;
