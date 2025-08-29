import { Request, Response } from "express";

const professorController = (req: Request, res: Response) => {
    res.send('Estamos na tela de professores!');
}

export default professorController
