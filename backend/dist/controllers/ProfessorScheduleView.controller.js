"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const ProfessorScheduleView_model_1 = __importDefault(require("../models/ProfessorScheduleView.model"));
class ProfessorScheduleViewController {
    async getProfessorByWeekdayAndShift(req, res) {
        try {
            const dayOfWeek = Number(req.query.dayOfWeek);
            const shift = String(req.query.shift);
            const professors = await ProfessorScheduleView_model_1.default.findAll({
                where: {
                    dayOfWeek,
                    shift,
                },
                order: [
                    [
                        'professor_name', 'ASC'
                    ]
                ]
            });
            res.json(professors);
        }
        catch (e) {
            if (e instanceof sequelize_1.BaseError) {
                console.log('Sequelize error: ', e.message);
                res.status(500).json({ error: 'Database error' });
            }
            else {
                console.log('Unknown error: ', e);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
}
exports.default = new ProfessorScheduleViewController;
