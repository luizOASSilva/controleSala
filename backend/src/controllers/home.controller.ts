import { Request, Response }  from "express";
import AulaView from "../models/aula-view.model";

class HomeController{
    public async getAllCursos(req: Request, res: Response) {
        try {
            const cursos = await AulaView.findAll();
            res.json(cursos);
        } catch(error) {
            res.status(404).json({ error: 'Cursos não encontrados.' })
        } 
    }
}

export default new HomeController;
