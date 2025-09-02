import api from "../api";

export interface AulaProps {
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

export const fetchAllAulas = async (): Promise<AulaProps[]> => {
    try {
        const response = await api.get<AulaProps[]>('/');
        return response.data;
    } catch(e: any) {
        throw new Error(e);
    }  
} 
