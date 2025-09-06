import { Request, Response }  from "express";
import LessonViewModel from "../models/LessonView.model";
import { BaseError } from "sequelize";

class LessonsViewController{
    public async getLessonByWeekdayAndShift (req: Request, res: Response) {
        try {
            const dayOfWeek = Number(req.query.dayOfWeek);
            const shift = String(req.query.shift)

            console.log(dayOfWeek, shift);

            const lessons: LessonViewModel[] = await LessonViewModel.findAll({
                where: {
                    dayOfWeek,
                    shift
                }
            })

            res.json(lessons);
        } catch(e) {
            if(e instanceof BaseError) {
                console.error('Sequelize error: ', e.message);
                res.status(500).json({ error: 'Database error' });
            } else {
                console.error('unknown error: ', e);
                res.status(500).json({ error: 'Internal server error' })
            }
        }

    }
}

export default new LessonsViewController;
