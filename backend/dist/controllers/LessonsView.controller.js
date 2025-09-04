"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LessonView_model_1 = __importDefault(require("../models/LessonView.model"));
const sequelize_1 = require("sequelize");
class LessonsViewController {
    async getLessonByWeekdayAndShift(req, res) {
        try {
            const dayOfWeek = Number(req.params.dayOfWeek);
            const shift = String(req.params.shift);
            console.log(dayOfWeek, shift);
            const lessons = await LessonView_model_1.default.findAll({
                where: {
                    dayOfWeek,
                    shift
                }
            });
            res.json(lessons);
        }
        catch (e) {
            if (e instanceof sequelize_1.BaseError) {
                console.error('Sequelize error: ', e.message);
                res.status(500).json({ error: 'Database error' });
            }
            else {
                console.error('unknown error: ', e);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
}
exports.default = new LessonsViewController;
