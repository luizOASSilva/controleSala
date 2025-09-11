import { ProfessorProps } from '@/types';
import dateUtils from '@/utils/dateUtils';
import api from '../api';

const dayOfWeek = Number(dateUtils.getDayOfWeekNumber());
const shift = String(dateUtils.getShiftByHours());

export const fetchProfessorsByWeekdayAndShift = async (): Promise<ProfessorProps[]> => {
  const { data } = await api.get(
    `api/professors?dayOfWeek=${dayOfWeek}&shift=${shift}`
  );

  return data
}
