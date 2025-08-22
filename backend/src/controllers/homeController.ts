import { Request, Response }  from "express";

const homeController = (req: Request, res: Response) => {
    res.send('Estamos na home');
}

export default homeController;