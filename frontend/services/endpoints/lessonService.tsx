import { LessonProps } from '@/types';
import dateUtils from '@/utils/dateUtils';
import api from '../api';

const dayOfWeek = Number(dateUtils.getDayOfWeekNumber());
const shift = String(dateUtils.getShiftByHours());     

export const fetchLessonsByWeekdayAndShift = async (): Promise<LessonProps[]> => {
  const { data } = await api.get<LessonProps[]>(
    `/api/lessons?dayOfWeek=${dayOfWeek}&shift=${shift}`
  );
  console.log(dayOfWeek)
  return data;
};
