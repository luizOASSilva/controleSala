import api from "../api";

export interface LessonProps {
    id: number;
    course: string;
    semester: string;
    subject: string;
    professor: string;
    location: string;
    floor: number;
    dayOfWeek: number;
    shift: string;
    startTime: string;  
    endTime: string;    
    year: number;
}

export const fetchAllLessons = async (): Promise<LessonProps[]> => {
    try {
        const response = await api.get<LessonProps[]>(`/api/lessons`);
        return response.data;
    } catch (e: any) {
        throw new Error(e);
    }  
};
