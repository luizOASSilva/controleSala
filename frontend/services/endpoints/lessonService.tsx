import { Lesson } from '@/types'
import dateUtils from '@/utils/dateUtils'
import api from '../api'

const dayOfWeek = Number(dateUtils.getDayOfWeekNumber())
const shift = String(dateUtils.getShiftByHours())

export const fetchLessonsByWeekdayAndShift = async (): Promise<Lesson[]> => {
  try {
    const { data } = await api.get<Lesson[]>(
      `/api/lessons?dayOfWeek=2&shift=noturno`
    );
    return data;
  } catch (e) {
    console.error("Erro ao buscar aulas:", e);
    return []
  }
};

export const fetchLessonById = async (id: string): Promise<Lesson | null> => {
  try {
    const { data } = await api.get<Lesson>(`/api/lessons/${id}`);
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

