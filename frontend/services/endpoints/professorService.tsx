import api from "../api";

export interface ProfessorProps {
    id: number,
    nome: string,
    status: string,
}

export const fetchAllProfessores = async (): Promise<ProfessorProps[]> => {
    try {
        const response = await api.get('/professores');
        return response.data;
    } catch(error: any){
        throw new Error(error);
    }
}
