import { Request, Response } from "express";

const editSubjectController = (req: Request, res: Response) => {
    res.send('Estamos na tela de editar matérias!')
}

export default editSubjectController;

