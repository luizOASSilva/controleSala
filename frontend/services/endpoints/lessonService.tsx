import api from '../api';
import { Lesson } from '@/types';
import dateUtils from '@/utils/dateUtils';

const dayOfWeek = Number(dateUtils.getDayOfWeekNumber());
const shift = String(dateUtils.getShiftByHours());     

export const fetchAllLessons = async (): Promise<Lesson[]> => {
  const { data } = await api.get<Lesson[]>(
    `/api/lessons?dayOfWeek=${dayOfWeek}&shift=${shift}`
  );
  return data;
};
