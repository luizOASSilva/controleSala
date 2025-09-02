import { Request, Response }  from "express";
import AulaView from "../models/aula-view.model";
import { getDiaDaSemana } from "../utils/get-dia-semana";

class HomeController{
    public async getAllAulas(req: Request, res: Response) {
        try {
            const diaDaSemana = getDiaDaSemana();
            const cursos = await AulaView.findAll({
                where: {
                    diaSemana: diaDaSemana,
                }
            });
            res.status(200).json(cursos);
        } catch(error) {
            res.status(500).json({ error: 'Aulas não encontradas.' })
        } 
    }
}

export default new HomeController;
