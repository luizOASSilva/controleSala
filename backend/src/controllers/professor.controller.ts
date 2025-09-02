import { Request, Response } from "express";
import Professor from "../models/professor.model";

class ProfessorController{
    public async getAllProfessores(req: Request, res: Response) {
        try {
            const professores = await Professor.findAll();
            res.status(200).json(professores);
        } catch(error) {
            res.status(500).json({ error: 'curso não encontrado' });
        }
    }
}

export default new ProfessorController;
