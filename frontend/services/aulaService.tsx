import api from "./api";

export interface Aula {
    id: number;
    curso: string,
    semestre: string,
    disciplina: string,
    professor: string,
    local: string,
    andar: number,
    diaSemana: string,
    turno: string,
    horasIni: string,
    horasFim: string,
    ano: number,
}

export const fetchAllAulas = async (): Promise<Aula[]> => {
    try {
        const response = await api.get<Aula[]>('/');
        return response.data;
    } catch(e: any) {
        throw new Error(e);
    }  
} 
