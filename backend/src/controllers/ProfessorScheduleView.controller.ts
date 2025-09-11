import { Request, Response } from "express";
import { BaseError } from "sequelize";
import ProfessorScheduleViewModel  from "../models/ProfessorScheduleView.model";

class ProfessorScheduleViewController {
    public async getProfessorByWeekdayAndShift(req: Request, res: Response) {
        try {
            const dayOfWeek = Number(req.query.dayOfWeek);
            const shift = String(req.query.shift);

            const professors: ProfessorScheduleViewModel[] = await ProfessorScheduleViewModel.findAll({
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

        } catch(e) {
            if(e instanceof BaseError) {
                console.log('Sequelize error: ', e.message);
                res.status(500).json({ error: 'Database error' })
            } else {
                console.log('Unknown error: ', e);
                res.status(500).json({ error: 'Internal server error' })
            }
        }
    }
}

export default new ProfessorScheduleViewController